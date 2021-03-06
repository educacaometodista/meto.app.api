module.exports = {
  bail: 0,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js'],
  transform: { '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin' },
};
