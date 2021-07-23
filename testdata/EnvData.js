const argv = require('argv')

module.exports = {
  SCREENSHOTS_PATH: 'screenshots',
  WAIT_TIMEOUT: 30000,

  ENV: argv.env || 'PROD',
  BROWSER_NAME: argv.browserName || 'Chrome',
  IS_HEADLESS: false,
  BASE_URL: 'https://www.amazon.com/'
}

