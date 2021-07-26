import BasePage from './basePage'
import BaseElement from '../elements/BaseElement'

const elements = {
  LOGIN_INPUT: new BaseElement('#nav-link-accountList-nav-line-1', 'Login input'),
  EMAIL_INPUT: new BaseElement( 'input[name="email"]', 'Email input'),
  PASS_INPUT: new BaseElement(':is(input[name="password"], input[name="sign-password"])', 'Password input'),
  LOGIN_BUTTON: new BaseElement('input[type="submit"]', 'Submit button'),
  CONTINUE_BUTTON: new BaseElement('#continue', 'Continue button'),
  SIGN_IN_BUTTON: new BaseElement('#signInSubmit', 'Sign In button'),
  ERROR_TITLE: new BaseElement('#auth-error-message-box h4', 'Error title'),
  ERROR_MESSAGE: new BaseElement('#auth-error-message-box ul:nth-child(1)', 'Error message')
}

export default class LoginPage extends BasePage {

  constructor (page) {
    super(page)
  }

  async fillUsername (username) {
    await this.fillElement(elements.EMAIL_INPUT, username)
  }

  async fillPassword (pass) {
    await this.fillElement(elements.PASS_INPUT, pass)
  }

  async clickContinue () {
    await this.clickElement(elements.CONTINUE_BUTTON)
  }

  async clickSignIn () {
    await this.clickElement(elements.SIGN_IN_BUTTON)
  }

  async loginAsUser (username, pass) {
    await this.fillUsername(username)
    await this.clickContinue()
    await this.fillPassword(pass)
    await this.clickSignIn()
  }

  async getErrorTitle () {
    return await this.getElementText(elements.ERROR_TITLE)
  }

  async getErrorNotification () {
    return await this.getElementText(elements.ERROR_MESSAGE)
  }

  async getErrorPresence () {
    return await this.isElementPresent(elements.ERROR_TITLE)
  }
}
