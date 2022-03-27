module.exports = {
  roots: ['<rootDir>/src'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '<rootDir>/src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
  }
}