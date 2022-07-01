module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
	plugins: ['nuxt'],
	// add your custom rules here
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
				semi: false,
				spaceBeforeFunctionParen: 'never',
			},
		],
		// 'prettier/prettier'              : 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// Multi-Word 컴포넌트 생성 안하면 오류로 잡는 부분 처리
		'vue/multi-word-component-names': 0,
	},
}
