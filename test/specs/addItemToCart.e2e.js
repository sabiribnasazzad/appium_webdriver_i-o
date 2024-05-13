import catalog from "../../pages/catalog.js"
import addToCart from "../../pages/addToCart.js";

describe("Test navigation to catalog", () => {

    it("should navigate to catalog --> add to cart", async () => {
        
        const productsUISelector = await $(catalog.productText);
        await expect(productsUISelector).toHaveText('Products');

        await $(catalog.getCatalogItem(1)).click();
    
    });

    it("Add items to cart & proceed to checkout", async() => {

        const productPrice = await $(addToCart.itemPrice).getText();

        await $(addToCart.redCircle).click();

        await $(addToCart.plusBtn).click();
    
        //const count = await $(addToCart.countamount).getText();
       // await expect(count).toHaveText("2");

        await $(addToCart.addCartBtn).click();

        await $(addToCart.cartBadge).click();

        //const totalItems = await $(addToCart.totalItems).getText();
       // console.log('Test total Items', totalItems);
      //  await expect(totalItems).toHaveText("2 items");

        //const totalPriceExpected = productPrice * count;
        const totalPriceActual = await $(addToCart.totalPrice).getText();
        console.log('Total Price Actual', totalPriceActual);

        await expect(totalPriceActual).toHaveText('$59.98');

    });

    it("Remove item functionality", async() => {

        await $(addToCart.removeBtn).click();

        await expect($(addToCart.noItemsText)).toHaveText('Oh no! Your cart is empty. Fill it up with swag to complete your purchase.');

        const cartElement = await $(addToCart.noItemsImage);
        await expect(cartElement).toExist();

        await $(addToCart.shoppingBtn).click();

        const productText = await $(catalog.productText);
        await expect(productText).toHaveText('Products');

    });
});