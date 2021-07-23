const EnvData = require('./testdata/EnvData')

module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      launchOptions: {
        headless: EnvData.IS_HEADLESS,
        slowMo: 500,
        args: ['--window-size=1920,1080']
      },
      browsers: ['chromium']
    }
  },

  testPathIgnorePatterns: ['/node_modules/', 'src', 'testdata']
}