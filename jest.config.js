module.exports = {
  roots: ['<rootDir>/src'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '<rootDir>/src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}