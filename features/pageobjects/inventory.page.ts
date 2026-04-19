import { Constant } from '../../utility/constants.ts';
class InventoryPage {

  async addProductToCart(productName: string) {
    const product = await $(Constant.PRODUCT_ELEMENT.replace('[PRODUCT_NAME]', productName));
    const addBtn = await product.$('button');
    await addBtn.click();
  }

  async goToCart() {
    await $(Constant.CART_ICON_ID).click();
  }
}

export default new InventoryPage();