const path = require('path');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require "use client" directive and a blank line after it in component files',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const filename = context.getFilename();
    const ext = path.extname(filename);
    const isComponentFile = ext === '.jsx' || ext === '.tsx';

    if (!isComponentFile) return {};

    let hasClientDirective = false;
    let clientDirectiveNode = null;
    let usesClientFeature = false;

    const clientHooks = new Set([
      'useState',
      'useEffect',
      'useLayoutEffect',
      'useRef',
      'useReducer',
    ]);

    const browserGlobals = new Set([
      'window',
      'document',
      'localStorage',
      'navigator',
      'sessionStorage',
      'location',
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
            break;
          }
        }
      },

      CallExpression(node) {
        const callee = node.callee;
        if (callee.type === 'Identifier' && clientHooks.has(callee.name)) {
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
              'Missing "use client" directive for component using client-only React hooks or browser APIs.',
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '"use client";\n\n');
            },
          });
        }

        if (hasClientDirective && clientDirectiveNode) {
          const nextToken = sourceCode.getTokenAfter(clientDirectiveNode);
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
