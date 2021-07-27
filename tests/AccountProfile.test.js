import { users } from '../testdata/UserData'
import MainPage from '../src/pages/MainPage'
import HeaderPage from '../src/pages/HeaderPage'
import LoginPage from '../src/pages/LoginPage'
import AccountPage from '../src/pages/account/AccountPage'
import ConstData from '../src/lib/ConstData'
import LoggerHelper from '../src/lib/Logger'

describe('Smoke - Login - Sign In:', () => {
  const mainPage = new MainPage(page)
  const headerPage = new HeaderPage(page)
  const loginPage = new LoginPage(page)
  const accountPage = new AccountPage(page)

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

  beforeEach(async () => {
    await LoggerHelper.Info(expect.getState().currentTestName)
  })

  afterEach(async () => {
    await mainPage.takePageScreenshot(expect.getState().currentTestName, counter++)
  })

  test('Go to main page, check user is not logged', async () => {
    await headerPage.navigateMainPage()
    expect(await headerPage.getUserInvitation(), 'Sign in invitation should be present').toStrictEqual('Hello, Sign in')
    expect(await mainPage.isUserNavLinkPresent(), 'User navigation link should not be present').toStrictEqual(false)
  })

  test('Fill in login page', async () => {
    await headerPage.clickLogin()
    await loginPage.loginAsUser(users.ogulikss.username, users.ogulikss.pass)
    expect(await headerPage.getUserInvitation(), 'User invitation should be present').toStrictEqual(`Hello, ${users.ogulikss.firstName}`)
  })

  test('Check account main page', async () => {
    await headerPage.clickAccountLists()
    const innerPagesRef = await accountPage.getAccountReferences()
    expect(innerPagesRef, 'Full list of account pages should be present').toStrictEqual(accountPagesRef)
  })

  test('Check account profile page', async () => {
    await accountPage.clickPageRefByTitle(ConstData.ACCOUNT_PAGE_TITLE.YOUR_PROFILES)
    expect(await accountPage.getProfileNameLabel(), 'Profile name label should be present').toStrictEqual(users.ogulikss.firstName)
  })
})