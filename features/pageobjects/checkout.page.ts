import { Constant } from '../../utility/constants.ts';

class CheckoutPage {

  async fillInformation(first: string, last: string, zip: string) {
    await $(Constant.FIRST_NAME_CLASS).setValue(first);
    await $(Constant.LAST_NAME_CLASS).setValue(last);
    await $(Constant.POSTAL_CODE_CLASS).setValue(zip);
  }

  async continue() {
    await $(Constant.CONTINUE_BUTTON_ID).click();
  }

  async finish() {
    await $(Constant.FINISH_BUTTON_ID).click();
  }
  async validateCheckoutComplete() {
    const completeHeader = await $(Constant.COMPLETE_HEADER_CLASS);
    await expect(completeHeader).toHaveText('Thank you for your order!');
  }
}

export default new CheckoutPage();