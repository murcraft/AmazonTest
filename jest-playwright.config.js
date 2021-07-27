const EnvData = require('./src/lib/EnvData')

module.exports = {
  browsers: [EnvData.BROWSER_NAME],
  launchOptions: {
    headless: EnvData.IS_HEADLESS,
    slowMo: 500
  }
}