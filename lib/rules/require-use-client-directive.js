const fs = require('fs');
const path = require('path');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require or disallow "use client" directive in React component files as appropriate',
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
    const isTypeFile = /^types?\.tsx?$/.test(baseName);
    const isLayoutOrPage =
      /^layout\.[jt]sx?$/.test(baseName) || /^page\.[jt]sx?$/.test(baseName);

    if (!isReactFile || ext === '.d.ts') return {};

    if (isTypeFile) {
      return {
        Program(node) {
          for (const stmt of node.body) {
            if (
              stmt.type === 'ExpressionStatement' &&
              stmt.expression.type === 'Literal' &&
              stmt.expression.value === 'use client'
            ) {
              context.report({
                node: stmt,
                message:
                  '"use client" directive is forbidden in type definition files',
                fix(fixer) {
                  return fixer.remove(stmt);
                },
              });
              break;
            }
          }
        },
      };
    }

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
        const sourceCode = context.getSourceCode();

        for (const stmt of node.body) {
          if (
            stmt.type === 'ExpressionStatement' &&
            stmt.expression.type === 'Literal' &&
            stmt.expression.value === 'use client'
          ) {
            hasClientDirective = true;
            clientDirectiveNode = stmt;
          }

          if (
            stmt.type === 'ImportDeclaration' &&
            stmt.source &&
            typeof stmt.source.value === 'string'
          ) {
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

            if (source.startsWith('.') || source.startsWith('/')) {
              try {
                const importingFile = context.getFilename();
                const importingDir = path.dirname(importingFile);
                const importPath = require.resolve(source, {
                  paths: [importingDir],
                });

                const extname = path.extname(importPath);
                if (['.js', '.jsx', '.ts', '.tsx'].includes(extname)) {
                  const content = fs.readFileSync(importPath, 'utf8');
                  const lines = content.split('\n').slice(0, 5);
                  const hasUseClientDirective = lines.some(
                    (line) =>
                      line.trim() === '"use client";' ||
                      line.trim() === "'use client';"
                  );

                  if (hasUseClientDirective) {
                    usesClientFeature = true;
                  }
                }
              } catch (err) {
              }
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

        if (callee.type === 'Identifier') {
          if (clientHooks.has(callee.name)) {
            calledClientHook = true;
          }

          if (clientOnlyFunctions.has(callee.name)) {
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

        if (hasJSX && calledClientHook) {
          usesClientFeature = true;
        }

        if (usesClientFeature && !hasClientDirective && !isLayoutOrPage) {
          context.report({
            node,
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
              const lines = sourceCode.getText().split('\n');
              const start = clientDirectiveNode.range[0];
              let end = clientDirectiveNode.range[1];
              if (lines[clientDirectiveNode.loc.end.line]?.trim() === '') {
                end += 1;
              }
              return fixer.removeRange([start, end]);
            },
          });
        }

        if (hasClientDirective && clientDirectiveNode) {
          const lines = sourceCode.getText().split('\n');
          const lineAfter = lines[clientDirectiveNode.loc.end.line];
          const hasEmptyLineAfter = lineAfter?.trim() === '';

          if (!hasEmptyLineAfter) {
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
