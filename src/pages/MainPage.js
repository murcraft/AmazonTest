import BasePage from './basePage'
import BaseElement from '../elements/BaseElement'

const elements = {
  USER_NAV_LABEL: new BaseElement('#nav-your-amazon-text', 'User navigation link')
}

export default class MainPage extends BasePage {

  constructor(page) {
    super(page)
    this.page = page
  }

  async isUserNavLinkPresent () {
    return await this.isElementPresent(elements.USER_NAV_LABEL)
  }

  async getUserNavLinkText () {
    return await this.getElementText(elements.USER_NAV_LABEL)
  }
}
