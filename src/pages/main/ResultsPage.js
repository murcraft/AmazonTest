import BasePage from '../BasePage'
import BaseElement from '../../elements/BaseElement'

const elements = {
  RESULTS_RANGE_LABEL: new BaseElement('.a-spacing-top-small > span', 'Results range label'),
  PRODUCT_CARD_LABEL: new BaseElement('.sg-col-4-of-12.s-result-item h2 span.a-text-normal', 'Product card label')
}
export default class ResultsPage extends BasePage {
  constructor (page) {
    super(page)
  }

  async getResultsRangeCount () {
    return await this.getElementText(elements.RESULTS_RANGE_LABEL)
  }

  async getAllProductCards () {
    return await this.getAllElementsText(elements.PRODUCT_CARD_LABEL)
  }
}