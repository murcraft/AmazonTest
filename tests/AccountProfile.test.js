import EnvData from '../testdata/EnvData'
import MainPage from '../src/pages/MainPage'
import HeaderPage from '../src/pages/HeaderPage'
import LoginPage from '../src/pages/LoginPage'
import AccountPage from '../src/pages/account/AccountPage'
import ConstData from '../src/lib/ConstData'
import { users } from '../testdata/UserData'
import LoggerHelper from '../src/lib/Logger'

describe('Smoke - Login - Sign In:', () => {
  let counter = 0
  const accountPagesRef = [
    'Your Orders',
    'Login & security',
    'Prime',
    'Gift cards',
    'Your Payments',
    'Your Profiles',
    'Your devices and content',
    'Your Messages',
    'Archived orders',
    'Your Lists'
  ]
  const mainPage = new MainPage(page)
  const headerPage = new HeaderPage(page)
  const loginPage = new LoginPage(page)
  const accountPage = new AccountPage(page)

  beforeEach(async () => {
    await LoggerHelper.Info(expect.getState().currentTestName)
  })

  afterEach(async () => {
    await mainPage.takePageScreenshot(expect.getState().currentTestName, counter++)
  })

  test('Go to main page, click login', async () => {
    await headerPage.navigatePage(EnvData.BASE_URL)
    await headerPage.clickLogin()
  })

  test('Fill in login page', async () => {
    await loginPage.loginAsUser(users.ogulikss)
    expect(await headerPage.getUserInvitation()).toEqual(`Hello, ${users.ogulikss.firstName}`)
  })

  test('Check account main page', async () => {
    await headerPage.clickAccountLists()
    const innerPagesRef = await accountPage.getAccountReferences()
    expect(innerPagesRef).toStrictEqual(accountPagesRef)
  })

  test('Check account profile page', async () => {
    await accountPage.clickPageRefByTitle(ConstData.ACCOUNT_PAGE_TITLE.YOUR_PROFILES)
    expect(await accountPage.getProfileNameLabel()).toStrictEqual(users.ogulikss.firstName)
  })
})