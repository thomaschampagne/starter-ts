# starter-ts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

<!-- toc -->

- [Introduction](#introduction)
- [Package description](#package-description)
- [Install](#install)
- [Usage](#usage)
- [Development](#development)
  - [Setup](#setup)
  - [Build library](#build-library)
  - [Run tests](#run-tests)
  - [Run linting check](#run-linting-check)
  - [Generate library documentation](#generate-library-documentation)
  - [Update library dependencies](#update-library-dependencies)
  - [Integrate library](#integrate-library)
- [Appendix](#appendix)
  - [Update the table of content of this readme](#update-the-table-of-content-of-this-readme)
- [License](#license)

<!-- tocstop -->

## Introduction

Looking to create a TypeScript library? You can use this repository as a starter kit which comes with all the necessary setup. It based on `antfu/starter-ts` with few improvements:

- Enforced `ESLint` rules.
- `TypeDoc` documentation generator.
- Auto update of the `README.md` table of content.
- Auto update of library dependencies.
- `Husky` in place of `simple-git-hooks` as pre-commit linting validator

For demonstration purposes, I included a password generator called `Sesame` in this starter library.

To get started, simply replace the content in these 2 files with your own code:

- `src/index.ts`
- `test/index.test.ts`

Happy coding 🙂 !

## Package description

`_description_`

## Install

```bash
npm install your-package-name
```

> Replace `your-package-name`, `starter-ts`, `_description_` and `thomaschampagne` globally to use this template.

## Usage

This below usage is for demonstration purposes.

```typescript
const passwordLength = 24;
const password = Sesame.create(passwordLength);
```

Replace this usage with yours.

## Development

### Setup

- Install the latest version of [pnpm](https://pnpm.io/) globally

```bash
npm uninstall -g pnpm
npm install -g pnpm@latest
```

_Note: If you never installed `pnpm` before, you may need to reload your shell to access `pnpm` CLI._

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

### Integrate library

Run common tasks all-in-once:

- Update to latest dependencies and install them
- TypeScript check
- Lint fixes
- Tests
- Build
- Update `README.md` table of content
- Generate documentation

```bash
pnpm run integrate
```

## Appendix

### Update the table of content of this readme

```bash
pnpm run readme:toc
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [Anthony Fu](https://github.com/thomaschampagne)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/starter-ts?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/starter-ts
[npm-downloads-src]: https://img.shields.io/npm/dm/starter-ts?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/starter-ts
[bundle-src]: https://img.shields.io/bundlephobia/minzip/starter-ts?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=starter-ts
[license-src]: https://img.shields.io/github/license/thomaschampagne/starter-ts.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/thomaschampagne/starter-ts/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/starter-ts
