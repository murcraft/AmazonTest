import BasePage from '../BasePage'
import BaseElement from '../../elements/BaseElement'

const elements = {
  FILTER_LABEL_BY_NAME: (filterName) => { return new BaseElement(`#hmenu-container:visible a:has-text('${filterName}')`, `'${filterName}' filter label`) },
  BACK_MENU_LINK: new BaseElement(`[aria-label='Back to main menu']:visible div`, 'Back to main menu link'),
  FILTER_SECTION_TITLE: new BaseElement('.hmenu-title:visible', 'Filter section title'),
  FILTER_SECTION_LABEL: new BaseElement('a.hmenu-item:visible:not(:has(div))', 'Filter section label')
}

export default class FiltersPage extends BasePage {

  constructor (page) {
    super(page)
  }

  async clickFilterByName (filterName) {
    await this.clickElement(elements.FILTER_LABEL_BY_NAME(filterName))
  }

  async getBackMainMenuText () {
    return await this.getElementText(elements.BACK_MENU_LINK)
  }

  async getFilterTitle () {
    return await this.getElementText(elements.FILTER_SECTION_TITLE)
  }

  async getFilterSections () {
    return await this.getAllElementsText(elements.FILTER_SECTION_LABEL)
  }
}