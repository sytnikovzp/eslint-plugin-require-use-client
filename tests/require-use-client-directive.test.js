const { RuleTester } = require('eslint');
const plugin = require('..');

const rule = plugin.rules['require-use-client-directive'];

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
});

describe('require-use-client-directive', () => {
  tester.run('require-use-client-directive', rule, {
    valid: [
      // no React/JSX -> ignore
      { filename: 'script.js', code: 'const x = 1;' },

      // layout/page files are exempt
      {
        filename: 'app/layout.tsx',
        code: 'export default function Layout(){ return (<div/>); }',
      },
      {
        filename: 'app/page.jsx',
        code: 'export default function Page(){ return (<div/>); }',
      },

      // JSX only without client features (no hooks, no handlers, no next imports)
      {
        filename: 'src/components/OnlyJSX.tsx',
        code: 'export default function C(){ return <div id="root"/> }',
      },

      // has directive and uses client feature
      {
        filename: 'Component.tsx',
        code: '"use client";\n\nimport React, { useEffect } from "react"; export default function C(){ useEffect(()=>{}); return <div/> }',
      },

      // utility/type files: should not require directive and will report removal when present (covered in invalid)
      {
        filename: 'src/shared/types/index.ts',
        // avoid TS-only syntax in core parser; filename still targets utility path
        code: 'export const T = 1;',
      },
    ],
    invalid: [
      // should insert directive when using client-only features (hook + JSX)
      {
        filename: 'src/components/C.tsx',
        code: 'import React, { useEffect } from "react"; export default function C(){ useEffect(()=>{}); return <div/> }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport React, { useEffect } from "react"; export default function C(){ useEffect(()=>{}); return <div/> }',
      },

      // should insert directive when using next/link import
      {
        filename: 'src/components/Link.tsx',
        code: 'import Link from "next/link"; export default function L(){ return <Link href="/"/> }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport Link from "next/link"; export default function L(){ return <Link href="/"/> }',
      },

      // should remove directive in type/utility files
      {
        filename: 'src/shared/types/index.ts',
        code: '"use client";\n\nexport const T = 1;',
        errors: [
          {
            message:
              '"use client" directive is forbidden in type/utility files',
          },
        ],
        output: '\n\nexport const T = 1;',
      },

      // should enforce blank line after directive
      {
        filename: 'Component.tsx',
        code: '"use client";\nimport React, { useEffect } from "react"; export default function C(){ useEffect(()=>{}); return <div/> }',
        // only blank-line error should be reported (uses client feature)
        errors: [
          {
            message:
              'There should be a blank line after the "use client" directive.',
          },
        ],
        output:
          '"use client";\n\nimport React, { useEffect } from "react"; export default function C(){ useEffect(()=>{}); return <div/> }',
      },

      // should remove directive when not using client features
      {
        filename: 'Component.tsx',
        code: '"use client";\n\nexport default function C(){ return 123 }',
        errors: [
          {
            message:
              '"use client" directive is not needed in this file and should be removed.',
          },
        ],
        // removal may leave the existing blank line; expect leading newlines preserved
        output: '\n\nexport default function C(){ return 123 }',
      },

      // browser globals usage should require directive
      {
        filename: 'src/components/UsesWindow.tsx',
        code: 'export default function C(){ console.log(window.location.href); return null }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nexport default function C(){ console.log(window.location.href); return null }',
      },

      // event handler attribute should require directive
      {
        filename: 'src/components/Handler.tsx',
        code: 'export default function C(){ return <button onClick={() => {}}/> }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nexport default function C(){ return <button onClick={() => {}}/> }',
      },

      // preventDefault call should require directive
      {
        filename: 'src/components/Prevent.tsx',
        code: 'export default function C(){ const on = (e) => e.preventDefault(); return <form onSubmit={on}/>} ',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nexport default function C(){ const on = (e) => e.preventDefault(); return <form onSubmit={on}/>} ',
      },

      // asset and next imports should require directive
      {
        filename: 'src/components/Img.tsx',
        code: 'import Image from "next/image"; export default function C(){ return <Image src="/a.png" width={1} height={1}/> }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport Image from "next/image"; export default function C(){ return <Image src="/a.png" width={1} height={1}/> }',
      },
      {
        filename: 'src/components/Nav.tsx',
        code: 'import { useRouter } from "next/navigation"; export default function C(){ const r = useRouter(); return null }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport { useRouter } from "next/navigation"; export default function C(){ const r = useRouter(); return null }',
      },
      {
        filename: 'src/components/Style.tsx',
        code: 'import "./styles.css"; export default function C(){ return null }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport "./styles.css"; export default function C(){ return null }',
      },
      {
        filename: 'src/components/Icon.tsx',
        code: 'import Logo from "./logo.svg"; export default function C(){ return <Logo/> }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport Logo from "./logo.svg"; export default function C(){ return <Logo/> }',
      },

      // createContext should require directive
      {
        filename: 'src/components/Ctx.tsx',
        code: 'import React, { createContext } from "react"; const Ctx = createContext(null); export default function C(){ return null }',
        errors: [
          {
            message:
              'Missing "use client" directive for component using client-only features.',
          },
        ],
        output:
          '"use client";\n\nimport React, { createContext } from "react"; const Ctx = createContext(null); export default function C(){ return null }',
      },
    ],
  });
});
