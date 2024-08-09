import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ['**/dist', '**/docs']
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier
    },

    languageOptions: {
      parser: tsParser
    },

    rules: {
      'prettier/prettier': 'error',
      'prefer-const': 'error',
      curly: ['error', 'all'],
      'no-console': 'error',
      'prefer-template': 'error',
      'no-eval': 'error',
      'func-style': 'error',
      'prefer-arrow-callback': 'error',
      '@typescript-eslint/no-shadow': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none'
        }
      ],

      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true
        }
      ]
    }
  }
];
