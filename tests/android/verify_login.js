import testData from "../../data_files/test_data.js"
import basePage from "../../pages/android/basePage.js"

describe("My Login Demo", () => {

    beforeEach(async () => {
      await $(basePage.hamburger).click();
      await $(basePage.loginText).click(); 
    });
  
    it("should not login with invalid credentials", async () => {
     
      await $(basePage.inputField).setValue(testData.wrongEmail);
      await $(basePage.passwordField).setValue(testData.wrongPassword);
      await $(basePage.loginButton).click();
      await driver.pause(3000);
  
      // validate the error message
      await expect($(basePage.message))
           .toHaveText("Provided credentials do not match any user in this service.");
    });
  
    it("should login with valid credentials", async () => {
    
      await $(basePage.inputField).setValue(testData.userEmail);
      await $(basePage.passwordField).setValue(testData.userPassword);
      await $(basePage.loginButton).click();
  
      const selector =
        'new UiSelector().text("Products").className("android.widget.TextView")';
      const productsUISelector = await $(`android=${selector}`);
      await expect(productsUISelector).toHaveText("Products");
    });
    
  });