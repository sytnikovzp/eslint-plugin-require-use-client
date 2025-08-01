module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require "use client" directive when using client-only React APIs',
      recommended: true
    },
    fixable: false,
    schema: []
  },

  create(context) {
    let hasClientDirective = false;
    let usesClientHook = false;

    return {
      Program(node) {
        for (const stmt of node.body) {
          if (
            stmt.type === 'ExpressionStatement' &&
            stmt.expression.type === 'Literal' &&
            stmt.expression.value === 'use client'
          ) {
            hasClientDirective = true;
            break;
          }
        }
      },

      CallExpression(node) {
        const callee = node.callee;
        if (
          callee.type === 'Identifier' &&
          ['useState', 'useEffect', 'useLayoutEffect', 'useRef', 'useReducer'].includes(callee.name)
        ) {
          usesClientHook = true;
        }
      },

      'Program:exit'(node) {
        if (usesClientHook && !hasClientDirective) {
          context.report({
            node,
            message: 'Missing "use client" directive for component using client-only React hooks.'
          });
        }
      }
    };
  }
};
