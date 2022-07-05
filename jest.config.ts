module.exports = {
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		// '^~/(.*)$': '<rootDir>/$1',
		// '^vue$': 'vue/dist/vue.common.js',
	},
	moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': '@vue/vue3-jest',
		'^.+\\.jsx?$': 'babel-jest',
	},
	testPathIgnorePatterns: ['/node_modules/'],
	transformIgnorePatterns: ['/node_modules/(?!@nuxtjs/composition-api)'],
	// collectCoverage: true,
	// collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.spec.[jt]s?(x)', '**/*.test.[jt]s?(x)'],
	roots: ['<rootDir>/test'],
	// modulePaths: ['<rootDir>', '/node_modules'],
	preset: 'ts-jest',
}
