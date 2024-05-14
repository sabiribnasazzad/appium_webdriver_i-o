import catalog from "../../pages/android/catalog.js"
import addToCart from "../../pages/android/addToCart.js";

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
        await $(addToCart.addCartBtn).click();
        await $(addToCart.cartBadge).click();
        const totalPriceActual = await $(addToCart.totalPrice).getText();
        console.log('Total Price Actual', totalPriceActual);
        await expect(parseFloat(totalPriceActual.slice(1))).toBe(parseFloat(productPrice.slice(1)) * 2);

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