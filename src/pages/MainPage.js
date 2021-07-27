import BasePage from './basePage'
import BaseElement from '../elements/BaseElement'

const elements = {
  USER_NAV_LABEL: new BaseElement('#nav-your-amazon-text', 'User navigation link'),
  ALL_MENU_BUTTON: new BaseElement('#nav-hamburger-menu', 'All menu button')
}

export default class MainPage extends BasePage {

  constructor (page) {
    super(page)
  }

  async isUserNavLinkPresent () {
    return await this.isElementPresent(elements.USER_NAV_LABEL)
  }

  async getUserNavLinkText () {
    return await this.getElementText(elements.USER_NAV_LABEL)
  }

  async clickAllMenu () {
    await this.clickElement(elements.ALL_MENU_BUTTON)
  }
}
