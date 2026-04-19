import {Constant} from '../../utility/constants.ts';
class LoginPage {
  async login(user: string, pass: string) {
    await $(Constant.USER_NAME_CLASS).setValue(user);
    await $(Constant.PASSWORD_CLASS).setValue(pass);
    await $(Constant.LOGIN_BUTTON_CLASS).click();
  }
  async validateErrorMessage() {
    const errorMessage = Constant.ERROR_MESSAGE_TEXT;
    const errorElement = await $(Constant.ERROR_MESSAGE_CLASS);
    await expect(errorElement).toHaveText(errorMessage);
  }

  async validateErrorMessageDisplay():Promise <boolean>{
    await expect(await $(Constant.ERROR_MESSAGE_CLASS)).toBeDisplayed();
    return true
  }
}

export default new LoginPage();