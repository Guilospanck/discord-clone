module.exports = {
  roots: ['<rootDir>/src'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/styles.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}