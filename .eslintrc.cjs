module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prefer-arrow', 'i18next'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'prettier/prettier': 'warn',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],

		'no-restricted-syntax': [
			'error',
			{
				selector:
					'ImportDeclaration[source.value=/.svg/][source.value=/\\u002E\\u002E\\u002Fassets/]',
				message:
					'Use the global alias "@assets" instead of a relative path to the icon'
			},
			{
				selector:
					'ImportDeclaration[source.value=/\\u002Esvg/] ImportDefaultSpecifier[local.name!=/Icon/]',
				message:
					'Not allowed to import SVG icons as components without the "Icon" suffix at the end.'
			},
			{
				selector:
					'ImportDeclaration[source.value=/@\\u002F(api|assets|components|constants|pages|providers|store|temp|types|utils)/]',
				message: 'Use alias `@{folderName}/` instead of `@/{folderName}/`'
			}
		],

		/* Arrow functions */
		'prefer-arrow/prefer-arrow-functions': [
			'error',
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false
			}
		],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],

		/* Other rules */
		'array-callback-return': 'error',
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-duplicate-imports': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-use-before-define': 'error',
		camelcase: 'error',
		'id-length': [
			'error',
			{ exceptions: ['_', 'w', 'h', 'e', 'i', 'j', 'k', 'p', 'm', 't'] }
		],
		eqeqeq: ['error', 'smart'],
		'dot-notation': 'error',
		curly: 'error',
		'no-lonely-if': 'error',
		'no-return-assign': 'error',
		'no-multi-str': 'error',
		'no-implicit-coercion': 'error',

		/* i18next */
		'i18next/no-literal-string': [
			'error',
			{
				message: 'Disallow literal string. Use i18next instead!'
			}
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
