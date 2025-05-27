import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],
    },
  },
  ...eslintPluginAstro.configs.recommended,
]);
