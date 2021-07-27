import ConstData from '../src/lib/ConstData'
import LoggerHelper from '../src/lib/Logger'
import MainPage from '../src/pages/MainPage'
import HeaderPage from '../src/pages/HeaderPage'
import FiltersPage from '../src/pages/main/FiltersPage'
import ResultsPage from '../src/pages/main/ResultsPage'

describe('Smoke - Filters Validation:', () => {
  const mainPage = new MainPage(page)
  const headerPage = new HeaderPage(page)
  const filtersPage = new FiltersPage(page)
  const resultsPage = new ResultsPage(page)

  let counter = 0
  const expectedSection = [
    'Computer Accessories & Peripherals',
    'Computer Components',
    'Computers & Tablets',
    'Data Storage',
    'External Components',
    'Laptop Accessories',
    'Monitors',
    'Networking Products',
    'Power Strips & Surge Protectors',
    'Printers',
    'Scanners',
    'Servers',
    'Tablet Accessories',
    'Tablet Replacement Parts',
    'Warranties & Services'
  ]

  beforeEach(async () => {
    await LoggerHelper.Info(expect.getState().currentTestName)
  })

  afterEach(async () => {
    await mainPage.takePageScreenshot(expect.getState().currentTestName, counter++)
  })

  test('Go to main page, open filters', async () => {
    await headerPage.navigateMainPage()
    await mainPage.clickAllMenu()
  })

  test('Select Computers, check sections', async () => {
    await filtersPage.clickFilterByName(ConstData.FILTER_NAME.COMPUTERS)
    expect(await filtersPage.getBackMainMenuText(), 'main menu text should be shown').toStrictEqual('MAIN MENU')
    expect(await filtersPage.getFilterTitle(), 'computers title should be correct').toStrictEqual('Computers')
    expect(await filtersPage.getFilterSections(), 'computers section title should be correct').toStrictEqual(expectedSection)
  })

  test('Click Data Storage, check data', async () => {
    await filtersPage.clickFilterByName(ConstData.FILTER_NAME.DATA_STORAGE)
    const resultsRange = await resultsPage.getResultsRangeCount()
    const productsArr = await resultsPage.getAllProductCards()
    const resultsCount = parseInt(resultsRange.match(/(?<=\d+-)\d+/g)[0])
    expect(productsArr.length, 'Results count on the top should be equal to cards count').toStrictEqual(resultsCount)
  })
})