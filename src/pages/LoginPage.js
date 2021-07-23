import BasePage from './basePage'
import BaseElement from '../elements/BaseElement'

const elements = {
  LOGIN_INPUT: new BaseElement('#nav-link-accountList-nav-line-1', 'Login input'),
  EMAIL_INPUT: new BaseElement( 'input[name="email"]', 'Email input'),
  PASS_INPUT: new BaseElement('input[name="password"]', 'Password input'),
  LOGIN_BUTTON: new BaseElement('input[type="submit"]', 'Submit button'),
  CONTINUE_BUTTON: new BaseElement('#continue', 'Continue button'),
  SIGN_IN_BUTTON: new BaseElement('#signInSubmit', 'Sign In button')
}

export default class LoginPage extends BasePage {

  constructor (page) {
    super(page)
    this.page = page
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

  async loginAsUser (userData) {
    await this.fillUsername(userData.username)
    await this.clickContinue()
    await this.fillPassword(userData.pass)
    await this.clickSignIn()
  }
}
