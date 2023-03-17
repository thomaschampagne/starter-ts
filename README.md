# starter-ts

> **Note**:
> Replace `starter-ts`, `_description_` and `thomaschampagne` globally to use this template.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

<!-- toc -->

- [Introduction](#introduction)
- [Install](#install)
- [Usage](#usage)
- [Development](#development)
  - [Setup](#setup)
  - [Build library](#build-library)
  - [Run tests](#run-tests)
  - [Run linting check](#run-linting-check)
  - [Generate library documentation](#generate-library-documentation)
  - [Update library dependencies](#update-library-dependencies)
- [Appendix](#appendix)
  - [Update the table of content of your readme](#update-the-table-of-content-of-your-readme)

<!-- tocstop -->

## Introduction

Looking to create a TypeScript library? You can use this repository as a starter kit which comes with all the necessary setup. It based on `antfu/starter-ts`.

- Enforced `ESLint` rules.
- `TypeDoc` documentation generator.
- Auto update of the `README.md` table of content.
- Auto update of library dependencies `npm-check-updates`.
- `Husky` package in place of `simple-git-hooks` as pre-commit linting validator

For demonstration purposes, I included a password generator called `Sesame` in this starter library. 

To get started, simply replace the content in these 2 files with your own code:

- `src/index.ts`
- `test/index.test.ts`

Happy coding 🙂 !

## Install

```bash
npm install your-package-name
```

Replace `your-package-name` with yours.

## Usage

This below usage is for demonstration purposes.

```typescript
const passwordLength = 16;
const password = Sesame.create(passwordLength);
```

Replace this usage with yours.

## Development

### Setup

- Install the latest version of `pnpm` globally 

```bash
npm uninstall -g pnpm && npm install -g pnpm@latest
```

- Then install the lib dependencies

```bash
pnpm install
```

### Build library

```bash
pnpm run build
```

### Run tests

```bash
pnpm run test
```

### Run linting check

```bash
pnpm run lint
```

Fix errors with:

```bash
pnpm run lint:fix
```

### Generate library documentation

```bash
pnpm run docs
```

Documentation is generated using [TypeDoc](https://typedoc.org/).

### Update library dependencies

```bash
pnpm run upgrade:libs
```

## Appendix

### Update the table of content of your readme

```bash
pnpm run readme:toc
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/pkg-placeholder?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/pkg-placeholder
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-placeholder?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/pkg-placeholder
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-placeholder?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=pkg-placeholder
[license-src]: https://img.shields.io/github/license/antfu/pkg-placeholder.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/pkg-placeholder/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/pkg-placeholder
