import unicornPlugin from 'eslint-plugin-unicorn';

export const baseUnicornConfig = {
	plugins: {
		unicorn: unicornPlugin
	},
	rules: {
		...unicornPlugin.configs.recommended.rules,
		// Pass error message when throwing errors
		'unicorn/error-message': 'error',
		// Uppercase regex escapes
		'unicorn/escape-case': 'error',
		// Array.isArray instead of instanceof
		'unicorn/no-instanceof-array': 'error',
		// Prevent deprecated `new Buffer()`
		'unicorn/no-new-buffer': 'error',
		// Keep regex literals safe!
		'unicorn/no-unsafe-regex': 'off',
		// Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
		'unicorn/number-literal-case': 'error',
		// includes over indexOf when checking for existence
		'unicorn/prefer-includes': 'error',
		// String methods startsWith/endsWith instead of more complicated stuff
		'unicorn/prefer-string-starts-ends-with': 'error',
		// textContent instead of innerText
		'unicorn/prefer-dom-node-text-content': 'error',
		// Enforce throwing type error when throwing error while checking typeof
		'unicorn/prefer-type-error': 'error',
		// Use new when throwing error
		'unicorn/throw-new-error': 'error',
		// Use numeric seperator
		'unicorn/numeric-separators-style': ['error', {
			onlyIfContainsSeparator: false,
			hexadecimal: {
				minimumDigits: 0,
				groupLength: 2
			},
			binary: {
				minimumDigits: 0,
				groupLength: 4
			},
			octal: {
				minimumDigits: 0,
				groupLength: 4
			},
			number: {
				minimumDigits: 7,
				groupLength: 3
			}
		}],
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true
				}
			}
		]
	}
};

export default [baseUnicornConfig];