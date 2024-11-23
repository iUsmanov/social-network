import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import fsdPathsGuard from 'eslint-plugin-fsd-paths-guard';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: { 'fsd-paths-guard': fsdPathsGuard, 'react-hooks': reactHooks },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'fsd-paths-guard/relative-path-checker': ['error', { alias: '@' }],
			'fsd-paths-guard/public-api-imports': [
				'error',
				{
					alias: '@',
					testFilesPatterns: [
						'**/mocks.ts',
						'**/mocks/**/*.{ts,tsx}',
						'**/*.test.*',
						'**/storybook/*Decorator.tsx',
						'**/*.stories.{ts,tsx}',
						'**/lib/tests/**/*.*',
					],
				},
			],
			'fsd-paths-guard/hierarchy-imports-between-layers': [
				'error',
				{
					alias: '@',
					ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
				},
			],
			'fsd-paths-guard/no-relative-import-to-public-api': 'error',
		},
	},
	{
		ignores: ['node_modules', 'build', 'scripts'],
		globals: {
			__IS_DEV__: true,
			__API__: true,
			__ENVIRON__: true,
		},
	},
];
