const EnvData = require('./src/lib/EnvData')

module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['<rootDir>/tests/*.js'],
  maxConcurrency: EnvData.CONCURRENT_TESTS,
  bail: 1,
  setupFilesAfterEnv: ['jest-expect-message']
}