// eslint-disable-next-line no-undef
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/index.ts',
		'!src/**/*.d.ts',
		'!src/**/*.stories.tsx'
	],
	coverageDirectory: 'coverage',
	preset: 'ts-jest',
	testEnvironment: 'jsdom'
}
