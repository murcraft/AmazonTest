const argv = require('yargs').argv

module.exports = {
  BASE_URL: 'https://www.amazon.com/',
  SCREENSHOTS_PATH: 'screenshots',
  WAIT_TIMEOUT: argv.waitTimeout || 30000,
  ENV: argv.env || 'PROD',
  BROWSER_NAME: argv.browserName || 'chromium',
  IS_HEADLESS: argv.isHeadless === 'true',
  CONCURRENT_TESTS: argv.concurrency || 1
}


