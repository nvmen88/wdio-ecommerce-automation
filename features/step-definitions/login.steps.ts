import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.ts';
import { Constant } from '../../utility/constants.ts';
import InventoryPage from '../pageobjects/inventory.page.ts';
import CartPage from '../pageobjects/cart.page.ts';
import CheckoutPage from '../pageobjects/checkout.page.ts';

Given('I am on the login page', async () => {
  await browser.url(Constant.BASE_URL);
});

When('I login with username {string} and password {string}', async (username: string, password: string) => {
  await LoginPage.login(username, password);
});

Then('I should see the inventory page', async () => {
  await expect(browser).toHaveUrl(Constant.INVENTORY_URL);
});

When('I add product {string} to cart', async (productName: string) => {
  await InventoryPage.addProductToCart(productName);
});

When('I go to cart page', async () => {
  await InventoryPage.goToCart();
});

When('I proceed to checkout', async () => {
  await CartPage.clickCheckout();
});

When('I fill checkout information', async () => {
  await CheckoutPage.fillInformation('Phuoc', 'Nguyen', '700000');
  await CheckoutPage.continue();
  await CheckoutPage.finish();
});

Then('I should complete the order successfully', async () => {
  await CheckoutPage.validateCheckoutComplete();
});

Then('I validate result {string}', async (result: string) => {
  switch (result) {
    case 'success':
      await expect(browser).toHaveUrl(Constant.INVENTORY_URL);
      break;
    case 'fail':
      await LoginPage.validateErrorMessageDisplay();
      await LoginPage.validateErrorMessage();
      break;
    case 'slow':
      const start = Date.now();
      await browser.waitUntil(async () => await $('.inventory_list').isDisplayed(), {
        timeout: 10000,
        timeoutMsg: 'Inventory page did not load'
      });
      const duration = Date.now() - start;
      console.log(`⏱ Load time: ${duration}ms`);
      expect(duration).toBeGreaterThan(2000);
      break;
    default:
      throw new Error(`Unknown result type: ${result}`);
  }
});
