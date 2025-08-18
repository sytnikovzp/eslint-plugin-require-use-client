const path = require('path');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require or disallow "use client" directive only in React component files',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const filename = context.getFilename();
    const ext = path.extname(filename);
    const baseName = path.basename(filename);

    const isReactFile = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
    const isTypeFile = /types?\.tsx?$/.test(baseName);
    const isLayoutOrPage =
      /^layout\.[jt]sx?$/.test(baseName) || /^page\.[jt]sx?$/.test(baseName);
    const isUtilityFile = /\/(api|lib|shared\/types)\//.test(filename);

    if (!isReactFile || ext === '.d.ts' || isTypeFile || isUtilityFile)
      return {};

    let hasClientDirective = false;
    let clientDirectiveNode = null;
    let hasJSX = false;
    let calledClientHook = false;
    let usesClientFeature = false;

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

    const clientOnlyFunctions = new Set(['createContext']);
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
        for (const stmt of node.body) {
          if (
            stmt.type === 'ExpressionStatement' &&
            stmt.expression.type === 'Literal' &&
            stmt.expression.value === 'use client'
          ) {
            hasClientDirective = true;
            clientDirectiveNode = stmt;
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
        if (node.name && /^on[A-Z]/.test(node.name.name)) {
          usesClientFeature = true;
        }
      },

      CallExpression(node) {
        const { callee } = node;

        if (callee.type === 'Identifier') {
          if (clientHooks.has(callee.name)) calledClientHook = true;
          if (clientOnlyFunctions.has(callee.name)) usesClientFeature = true;
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
        if (hasJSX && calledClientHook) {
          usesClientFeature = true;
        }

        const targetNode = clientDirectiveNode || node;

        if (usesClientFeature && !hasClientDirective && !isLayoutOrPage) {
          context.report({
            node: targetNode,
            message:
              'Missing "use client" directive for component using client-only features.',
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '"use client";\n\n');
            },
          });
        }

        if (!usesClientFeature && hasClientDirective && clientDirectiveNode) {
          context.report({
            node: clientDirectiveNode,
            message:
              '"use client" directive is not needed in this file and should be removed.',
            fix(fixer) {
              return fixer.remove(clientDirectiveNode);
            },
          });
        }

        if (hasClientDirective && clientDirectiveNode) {
          const sourceCode = context.getSourceCode();
          const lines = sourceCode.getText().split('\n');
          const lineAfter = lines[clientDirectiveNode.loc.end.line];
          if (lineAfter?.trim() !== '') {
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
