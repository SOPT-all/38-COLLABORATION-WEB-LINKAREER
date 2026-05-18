import js from '@eslint/js';
import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';
import react from '@eslint-react/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'src/shared/apis/__generated__/**']),
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@eslint-react': react,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'vanilla-extract': vanillaExtract,
    },
    rules: {
      '@eslint-react/no-array-index-key': 'warn',
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*'],
              message:
                '상위 디렉토리 상대 경로 대신 path alias를 사용해주세요.',
            },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'],
            ['^react$', '^react-dom', '^@?\\w'],
            [
              '^@(/.*|$)',
              '^@(pages|routes|shared|apis|assets|components|hooks|styles|utils)(/.*|$)',
            ],
            ['^\\.'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'vanilla-extract/concentric-order': 'error',
    },
  },
  {
    files: ['**/*.css.ts'],
    extends: [vanillaExtract.configs.recommended],
  },
  eslintConfigPrettier,
]);
