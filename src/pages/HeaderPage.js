import BasePage from './basePage'
import BaseElement from '../elements/BaseElement'

const ELEM = {
  LOGIN_BUTTON: new BaseElement('#nav-link-accountList-nav-line-1', 'Login button'),
  USER_INVITATION_LABEL: new BaseElement('#nav-link-accountList-nav-line-1', 'User invitation label'),
  ACCOUNT_LISTS_DROPDOWN: new BaseElement('#nav-link-accountList', 'Account/Lists dropdown'),
  ACCOUNT_LABEL: new BaseElement(`#nav-al-your-account span:has-text('Account')`, 'Account label'),

}

export default class HeaderPage extends BasePage {

  constructor (page) {
    super(page)
    this.page = page
  }

  async clickLogin () {
    await this.clickElement(ELEM.LOGIN_BUTTON)
  }

  async getUserInvitation () {
    return await this.getElementText(ELEM.USER_INVITATION_LABEL)
  }

  async clickAccountLists () {
    await this.hoverElement(ELEM.ACCOUNT_LISTS_DROPDOWN)
    await this.clickElement(ELEM.ACCOUNT_LABEL)
  }
}
