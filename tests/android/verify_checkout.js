import addToCart from "../../pages/android/addToCart.js";
import catalog from "../../pages/android/catalog.js";
import checkout from "../../pages/android/checkout.js";
import basePage from "../../pages/android/basePage.js";
import testData from "../../data_files/test_data.js";

describe("Test navigation to catalog", () => {

    it("should navigate to catalog --> add to cart", async () => {
        
        const productsUISelector = await $(catalog.productText);
        await expect(productsUISelector).toHaveText('Products');
        await $(catalog.getCatalogItem(2)).click();
    
    });

    it("Add items to cart & proceed to checkout", async() => {

        await $(addToCart.blackCircle).click();
        await $(addToCart.plusBtn).click();
        await $(addToCart.addCartBtn).click();
        await $(addToCart.cartBadge).click();
        await $(addToCart.proceedBtn).click();

    });

    it("Should not move to checkout without signing into app", async() => {

        const loginText = await $(checkout.loginText);
        await expect(loginText).toExist();
        await $(basePage.inputField).setValue(testData.userEmail);
        await $(basePage.passwordField).setValue(testData.userPassword);
        await $(basePage.loginButton).click();
        const checkoutText = await $(checkout.checkoutText);
        await expect(checkoutText).toExist();

    });

    it("Testing validation for checkout modal", async() => {

        await $(checkout.paymentBtn).click();
        await expect($(checkout.fullNameValidation)).toHaveText('Please provide your full name.');
        await expect($(checkout.addressValidation)).toHaveText('Please provide your address.');
        await expect($(checkout.cityValidation)).toHaveText('Please provide your city.');
        await expect($(checkout.zipcodeValidation)).toHaveText('Please provide your zip code.');
        await expect($(checkout.countryValidation)).toHaveText('Please provide your country.');

    });

});