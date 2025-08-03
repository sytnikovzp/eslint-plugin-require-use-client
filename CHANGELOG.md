# Changelog

## [1.14.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.13.0...v1.14.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect 'use client' requirement from imported client components ([52a2029](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/52a2029b62293db347843423b5ade2a18713b7ed))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))
* support tsconfig paths with eslint-import-resolver-typescript ([bcc6ca0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/bcc6ca018c06a0fc2eb7ef82bf22f43fc3e6d5dc))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* some errors ([778480b](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/778480bd65db851551e677ab352964e453e44f64))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* updated lock file ([517a2c6](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/517a2c61cc208ea91a04f186b1f1cb777f7fb625))
* updated peerDependencies ([e8db13f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e8db13fe361350ff22a9930f4d65642c49bd566e))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.13.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.12.0...v1.13.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect 'use client' requirement from imported client components ([52a2029](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/52a2029b62293db347843423b5ade2a18713b7ed))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))
* support tsconfig paths with eslint-import-resolver-typescript ([bcc6ca0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/bcc6ca018c06a0fc2eb7ef82bf22f43fc3e6d5dc))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* some errors ([778480b](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/778480bd65db851551e677ab352964e453e44f64))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* updated lock file ([517a2c6](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/517a2c61cc208ea91a04f186b1f1cb777f7fb625))
* updated peerDependencies ([e8db13f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e8db13fe361350ff22a9930f4d65642c49bd566e))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.12.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.11.0...v1.12.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect 'use client' requirement from imported client components ([52a2029](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/52a2029b62293db347843423b5ade2a18713b7ed))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))
* support tsconfig paths with eslint-import-resolver-typescript ([bcc6ca0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/bcc6ca018c06a0fc2eb7ef82bf22f43fc3e6d5dc))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* updated lock file ([517a2c6](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/517a2c61cc208ea91a04f186b1f1cb777f7fb625))
* updated peerDependencies ([e8db13f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e8db13fe361350ff22a9930f4d65642c49bd566e))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.11.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.10.0...v1.11.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect 'use client' requirement from imported client components ([52a2029](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/52a2029b62293db347843423b5ade2a18713b7ed))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.10.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.9.0...v1.10.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.9.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.8.0...v1.9.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* require "use client" only for client code and auto-remove if unused ([ad562a3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ad562a3ec33af9fdf261d33ce1e78980b6432c92))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.8.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.7.0...v1.8.0) (2025-08-03)


### Features

* add detection for useContext and createContext in client directive rule ([7c543f4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/7c543f49370ba0dfdff28b168f1bc2c3fd09fd6d))
* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.7.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.6.0...v1.7.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.6.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.5.0...v1.6.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* ignore *types.ts files in use client ESLint rule ([a232660](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a2326600c867d9793343a3297fdf990c0a14d378))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.5.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.4.0...v1.5.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* avoid false positives for "use client" rule in non-JSX hooks ([e230ce3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/e230ce3061dba8b4915574240d0e05bb4318f627))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.4.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.3.0...v1.4.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* extend "use client" detection to .js and .ts files ([ca2c085](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ca2c085dc393e1bd37193f9064098b62cb53cc8b))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.3.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.2.0...v1.3.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))
* detect client-only imports (e.g. svg, css) as requiring 'use client' ([ee5f9aa](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/ee5f9aabfd9bcbe2f1dfe5e853df4a760053d29a))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.2.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.1.0...v1.2.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.1.0](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.0.4...v1.1.0) (2025-08-03)


### Features

* add more React hooks requiring "use client" directive ([252939a](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/252939af9d47c6ecc99f5b29ed6c7c300fbc7bf5))


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.0.4](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.0.3...v1.0.4) (2025-08-03)


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.0.3](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.0.2...v1.0.3) (2025-08-03)


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* apply "use client" check only in .jsx and .tsx files ([2555c8f](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/2555c8fa4ec1d74da9597f389838b1ae0600b232))
* **rule:** require blank line after "use client" directive ([9cca882](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/9cca8822fa5e3eda9e1c32eb87519e7232da8626))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.0.2](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.0.1...v1.0.2) (2025-08-01)


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## [1.0.1](https://github.com/sytnikovzp/eslint-plugin-require-use-client/compare/v1.0.0...v1.0.1) (2025-08-01)


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* updated keywords array ([97a78ac](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/97a78ac54ee274b6da6b2de3d98a6a15dceea435))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([3155357](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/315535706497e67377a8ad6324a82259f5cab2bd))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))

## 1.0.0 (2025-08-01)


### Bug Fixes

* added fixer ([93fdde7](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/93fdde71e234d38ad3743ec72478d2672697bcbd))
* updated keywords array ([a31c803](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a31c80345cd89d3f7d02fa7d0fea3bbc5e334939))
* workflows bugs ([a620467](https://github.com/sytnikovzp/eslint-plugin-require-use-client/commit/a62046751893fe76fde9f42d69adb1c83f9f2e93))
