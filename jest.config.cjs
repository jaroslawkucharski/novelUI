// eslint-disable-next-line no-undef
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	preset: 'ts-jest',
	testEnvironment: 'jsdom'
}
