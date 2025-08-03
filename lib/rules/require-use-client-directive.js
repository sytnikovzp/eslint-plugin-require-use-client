const path = require('path');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require "use client" directive and a blank line after it in React component files',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const filename = context.getFilename();
    const ext = path.extname(filename);
    const baseName = path.basename(filename);

    if (ext === '.d.ts' || !['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
      return {};
    }

    if (/types?\.tsx?$/.test(baseName)) {
      return {};
    }

    let hasClientDirective = false;
    let clientDirectiveNode = null;
    let usesClientFeature = false;
    let hasJSX = false;

    const clientHooks = new Set([
      'useState',
      'useEffect',
      'useLayoutEffect',
      'useRef',
      'useReducer',
      'useCallback',
      'useMemo',
      'useContext',
      'useImperativeHandle',
      'useDebugValue',
    ]);

    const browserGlobals = new Set([
      'window',
      'document',
      'localStorage',
      'navigator',
      'sessionStorage',
      'location',
      'FormData',
    ]);

    return {
      Program(node) {
        hasClientDirective = false;
        clientDirectiveNode = null;
        usesClientFeature = false;
        hasJSX = false;

        for (const stmt of node.body) {
          if (
            stmt.type === 'ExpressionStatement' &&
            stmt.expression.type === 'Literal' &&
            stmt.expression.value === 'use client'
          ) {
            hasClientDirective = true;
            clientDirectiveNode = stmt;
            break;
          }

          if (stmt.type === 'ImportDeclaration') {
            const source = stmt.source.value;

            if (
              source === 'next/image' ||
              source === 'next/navigation' ||
              source === 'next/link' ||
              source === 'next/dynamic' ||
              /\.(svg|png|jpe?g|webp|gif|css|scss)$/.test(source)
            ) {
              usesClientFeature = true;
            }
          }
        }
      },

      JSXElement() {
        hasJSX = true;
      },

      JSXFragment() {
        hasJSX = true;
      },

      JSXAttribute(node) {
        hasJSX = true;

        if (
          node.name &&
          typeof node.name.name === 'string' &&
          /^on[A-Z]/.test(node.name.name)
        ) {
          usesClientFeature = true;
        }
      },

      CallExpression(node) {
        const { callee } = node;

        if (callee.type === 'Identifier' && clientHooks.has(callee.name)) {
          if (hasJSX) {
            usesClientFeature = true;
          }
        }

        if (
          callee.type === 'MemberExpression' &&
          callee.property.type === 'Identifier' &&
          callee.property.name === 'preventDefault'
        ) {
          usesClientFeature = true;
        }
      },

      Identifier(node) {
        if (browserGlobals.has(node.name)) {
          usesClientFeature = true;
        }
      },

      'Program:exit'(node) {
        const sourceCode = context.getSourceCode();

        if (usesClientFeature && !hasClientDirective) {
          context.report({
            node,
            message:
              'Missing "use client" directive for component using client-only React hooks, browser APIs, or interactive JSX props.',
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '"use client";\n\n');
            },
          });
        }

        if (hasClientDirective && clientDirectiveNode) {
          const lineAfterDirective = sourceCode.getText().split('\n')[
            clientDirectiveNode.loc.end.line
          ];

          const lineIsEmpty = lineAfterDirective?.trim() === '';

          if (!lineIsEmpty) {
            context.report({
              node: clientDirectiveNode,
              message:
                'There should be a blank line after the "use client" directive.',
              fix(fixer) {
                return fixer.insertTextAfter(clientDirectiveNode, '\n');
              },
            });
          }
        }
      },
    };
  },
};
