import addToCart from "../../pages/addToCart.js";
import catalog from "../../pages/catalog.js";
import checkout from "../../pages/checkout.js";
import appselector from "../../pages/basePage.js";
import testdata from "../../dataFile/testdata.js";

describe("Test navigation to catalog", () => {

    it("should navigate to catalog --> add to cart", async () => {
        
        const productsUISelector = await $(catalog.productText);
        await expect(productsUISelector).toHaveText('Products');
        await $(catalog.getCatalogItem(2)).click();
    
    });

    it("Add items to cart & proceed to checkout", async() => {

        await $(addToCart.blackCircle).click();
        await $(addToCart.plusBtn).click();
    
        //const count = await $(addToCart.countamount).getText();
       // await expect(count).toHaveText("2");

        await $(addToCart.addCartBtn).click();
        await $(addToCart.cartBadge).click();
        await $(addToCart.proceedBtn).click();

    });

    it("Should not move to checkout without signing into app", async() => {

        const loginText = await $(checkout.loginText);
        await expect(loginText).toExist();

        await $(appselector.inputField).setValue(testdata.useremail);
        await $(appselector.passwordField).setValue(testdata.userpassword);
        await $(appselector.loginButton).click();
        // await driver.pause(3000);

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