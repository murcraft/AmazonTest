import { users } from '../testdata/UserData'
import MainPage from '../src/pages/MainPage'
import HeaderPage from '../src/pages/HeaderPage'
import LoginPage from '../src/pages/LoginPage'
import LoggerHelper from '../src/lib/Logger'

describe('Smoke - Login Validation:', () => {
  const mainPage = new MainPage(page)
  const headerPage = new HeaderPage(page)
  const loginPage = new LoginPage(page)

  let counter = 0
  const invalidEmail = 'invalidEmail@'
  const invalidPass = 'invalidPass'
  const errorTitle = 'There was a problem'
  const errorEmailMsg = 'We cannot find an account with that email address'
  const errorPassMsg = 'Your password is incorrect'
  const navLinkText = `${users.ogulikss.firstName}'s Amazon.com`

  beforeEach(async () => {
    await LoggerHelper.Info(expect.getState().currentTestName)
  })

  afterEach(async () => {
    await mainPage.takePageScreenshot(expect.getState().currentTestName, counter++)
  })

  test('Go to main page and click login', async () => {
    await headerPage.navigateMainPage()
    await headerPage.clickLogin()
  })

  test('Fill in incorrect email, check error message', async () => {
    await loginPage.fillUsername(invalidEmail)
    await loginPage.clickContinue()
    expect(await loginPage.getErrorTitle()).toStrictEqual(errorTitle)
    expect(await loginPage.getErrorNotification()).toStrictEqual(errorEmailMsg)
  })

  test('Set correct email, check no errors', async () => {
    await loginPage.fillUsername(users.ogulikss.username)
    await loginPage.clickContinue()
    expect(await loginPage.getErrorPresence()).toStrictEqual(false)
  })

  test('Fill in incorrect password, check error message', async () => {
    await loginPage.fillPassword(invalidPass)
    await loginPage.clickSignIn()
    expect(await loginPage.getErrorTitle()).toStrictEqual(errorTitle)
    expect(await loginPage.getErrorNotification()).toStrictEqual(errorPassMsg)
  })

  test('Set correct pass, check user is signed in', async () => {
    await loginPage.fillPassword(users.ogulikss.pass)
    await loginPage.clickSignIn()
    expect(await loginPage.getErrorPresence()).toStrictEqual(false)
    expect(await headerPage.getUserInvitation()).toStrictEqual(`Hello, ${users.ogulikss.firstName}`)
    expect(await mainPage.getUserNavLinkText()).toStrictEqual(navLinkText)
  })
})