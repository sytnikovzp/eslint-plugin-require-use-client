# ESLint Plugin: require "use client" directive

An ESLint plugin that enforces the presence (or absence) of the `"use client"` directive in React component files, with an empty line after the directive. Designed for Next.js apps and React components that use client-only features.

---

## Why

- **Consistency**: All client components start with a clear `"use client"` directive.
- **Safety**: Avoid unnecessary `"use client"` in types/utilities/server-only files.
- **DX**: Autofix inserts/removes the directive and ensures a blank line.

---

## Install

```bash
npm i -D eslint-plugin-require-use-client
```

---

## Configure

`.eslintrc` (JSON):

```json
{
  "plugins": ["require-use-client"],
  "rules": {
    "require-use-client/require-use-client-directive": "warn"
  }
}
```

`.eslintrc.js` (CommonJS):

```js
module.exports = {
  plugins: ['require-use-client'],
  rules: {
    'require-use-client/require-use-client-directive': 'warn',
  },
};
```

---

## Usage

Autofix across your project:

```bash
npx eslint --fix .
```

---

## What the rule does

- If a file uses **client-only features** and is not a Next.js `layout`/`page`, it must start with `"use client";` followed by a blank line.
- If a file is a **type or utility** (e.g. `src/shared/types/**`, `src/common/api/**`, `src/lib/**`), the rule removes `"use client"` if present.
- If `"use client"` exists but there is **no blank line** after it, the rule inserts one.

Client-only features (detected heuristics):

- React hooks like `useEffect`, `useState`, etc.
- DOM/browser APIs: `window`, `document`, `localStorage`, etc.
- Next.js client imports: `next/link`, `next/navigation`, `next/image`, `next/dynamic`.
- JSX with client hooks, event handlers (`onClick`, etc.), `preventDefault`, and `createContext`.

Exempt files:

- `layout.*` and `page.*` files in Next.js apps.

---

## Before / After

Insert directive when needed:

```tsx
// Before
import React, { useEffect } from 'react';
export default function C() {
  useEffect(() => {});
  return <div />;
}

// After (eslint --fix)
'use client';

import React, { useEffect } from 'react';
export default function C() {
  useEffect(() => {});
  return <div />;
}
```

Remove directive in utility/type files:

```ts
// Before (utility/type)
'use client';

export type T = { a: number };

// After (eslint --fix)
export type T = { a: number };
```

Ensure blank line after directive:

```tsx
// Before
'use client';
import React from 'react';

// After (eslint --fix)
'use client';

import React from 'react';
```

---

## Development

```bash
# Install deps
npm install

# Run tests
npm test

# Watch (not required for JS build)
npm run dev
```

Node.js >= 18, ESLint >= 8.
