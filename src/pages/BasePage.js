import EnvData from '../../testdata/EnvData'
import LoggerHelper from '../lib/Logger'
import DateHelper from '../lib/DateHelper'

const WAIT_TIMEOUT = EnvData.WAIT_TIMEOUT

export default class BasePage {
  constructor (page) {
    this.page = page
  }

  async navigatePage (url) {
    LoggerHelper.Debug(`Navigating to the page ${url}'`)
    try {
      await this.page.goto(url, {timeout: WAIT_TIMEOUT, waitUntil: 'domcontentloaded'})
    } catch (err) {
      throw new Error(`Page with url ${url} is not loaded`)
    }
  }

  async clickElement (elem, options = {}) {
    options = { timeout: WAIT_TIMEOUT, ...options }
    LoggerHelper.Debug(`Clicking on ${elem.description} by selector '${elem.selector}'`)
    try {
      await this.page.click(elem.selector, options)
    } catch (err) {
      throw new Error(`Element '${elem.selector}' is not found. Details: ${err.message}`)
    }
  }

  async fillElement (elem, value, options = {}) {
    options = { timeout: WAIT_TIMEOUT, ...options }
    LoggerHelper.Debug(`Filling ${elem.description} with the text '${value}'`)
    try {
      await this.page.fill(elem.selector, value, options)
    } catch (err) {
      throw new Error(`Element is not found. Details: ${err.message}`)
    }
  }

  async getElementText (elem, options = {}) {
    options = { timeout: WAIT_TIMEOUT, ...options }
    LoggerHelper.Debug(`Getting text of ${elem.description} by selector '${elem.selector}'`)
    try {
      return await this.page.innerText(elem.selector, options)
    } catch (err) {
      throw new Error(`Element '${elem.selector}' is not found. Details: ${err.message}`)
    }
  }

  async getAllElementsText (elem, options = {}) {
    LoggerHelper.Debug(`Getting text of ${elem.description} elements by selector '${elem.selector}'`)
    try {
      const elementsArr = await this.page.$$(elem.selector, options)
      const textArr = await Promise.all(elementsArr.map(elem => { return elem.innerText() }))
      LoggerHelper.Debug(`Text is: ${textArr}`)
      return textArr
    } catch (err) {
      throw new Error(`Element '${elem.selector}' is not found. Details: ${err.message}`)
    }
  }

  async hoverElement (elem, options = {}) {
    options = { timeout: WAIT_TIMEOUT, ...options }
    LoggerHelper.Debug(`Hovering on ${elem.description} element by selector '${elem.selector}'`)
    try {
      await this.page.focus(elem.selector, options)
      await this.page.hover(elem.selector, options)
    } catch (err) {
      throw new Error(`Element '${elem.selector}' is not found. Details: ${err.message}`)
    }
  }

  async takePageScreenshot (fileName, testNum) {
    const actualSuiteName = fileName.match(/^[\w\W\d]+(?=:)/)[0].replace(/\W/g, '_')
    const actualFileName = fileName.match(/(?<=: )[\w\W\d]+/)[0].replace(/\W/g, '_').substring(0, 30)
    const dateTime = DateHelper.getDateTime().substring(0, 19).replace(/:./g, '')

    LoggerHelper.Debug(`Getting screenshot of the page for test ${fileName}`)
    await this.page.waitForLoadState('domcontentloaded')
    await this.page.screenshot({ path: `${EnvData.SCREENSHOTS_PATH}/${actualSuiteName}/${testNum}_${actualFileName}-${dateTime}.png` })
  }

  async isElementPresent (elem, options = {}) {
    options = { timeout: WAIT_TIMEOUT, ...options }
    LoggerHelper.Debug(`Getting visibility of ${elem.description} by selector '${elem.selector}'`)
    try {
      return await this.page.isVisible(elem.selector, options)
    } catch (err) {
      throw new Error(`Element '${elem.selector}' is not found. Details: ${err.message}`)
    }
  }

  async navigateMainPage () {
    await this.navigatePage(EnvData.BASE_URL)
  }
}
