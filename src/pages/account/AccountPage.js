import BasePage from '../BasePage'
import BaseElement from '../../elements/BaseElement'

const elements = {
  ACCOUNT_REF_LABEL: new BaseElement('.ya-card-cell .a-row h2', 'Account reference label'),
  PAGE_REF_LABEL: (title) => { return new BaseElement(`text=${title}`, `Page reference '${title}' label`)},
  PROFILE_NAME_LABEL: new BaseElement('#home-profile-0', 'Profile name label')
}

export default class AccountPage extends BasePage {

  constructor (page) {
    super(page)
    this.page = page
  }

  async getAccountReferences () {
    return await this.getAllElementsText(elements.ACCOUNT_REF_LABEL)
  }

  async clickPageRefByTitle (title) {
    return await this.clickElement(elements.PAGE_REF_LABEL(title))
  }

  async getProfileNameLabel () {
    return await this.getElementText(elements.PROFILE_NAME_LABEL)
  }
}
