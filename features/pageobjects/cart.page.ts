import { Constant } from '../../utility/constants.ts';
class CartPage {

  get checkoutBtn() { return $(Constant.CHECKOUT_BUTTON_ID); }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}

export default new CartPage();