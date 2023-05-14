require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	env: {
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['sort-keys-fix'],
	rules: {
		'prefer-template': 1,
		'import/order': require('./plugins/import').rules,
		'@typescript-eslint/no-explicit-any': 'off',
		'import/no-anonymous-default-export': [
			1,
			{
				allowObject: true,
			},
		],
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-interface': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
			},
		],
		'sort-keys-fix/sort-keys-fix': 1,
		'curly': [1, 'all'],
		'eqeqeq': [1, 'smart'],
	},
};
