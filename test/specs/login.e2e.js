import testdata from "../../dataFile/testdata.js"
import appselector from "../../pages/basePage.js"

describe("My Login Demo", () => {
    beforeEach(async () => {
      await $(appselector.hamburger).click();
      await $(appselector.loginText).click(); 
      // await driver.pause(3000)
    });
  
    it("should not login with invalid credentials", async () => {
     
      await $(appselector.inputField).setValue(testdata.wrongemail);
      await $(appselector.passwordField).setValue(testdata.wrongpassword);
      await $(appselector.loginButton).click();
      await driver.pause(3000);
  
      //Validate the error message
      await expect($(appselector.message))
           .toHaveText("Provided credentials do not match any user in this service.");
    });
  
    it("should login with valid credentials", async () => {
    
      await $(appselector.inputField).setValue(testdata.useremail);
      await $(appselector.passwordField).setValue(testdata.userpassword);
      await $(appselector.loginButton).click();
      // await driver.pause(3000);
  
      const selector =
        'new UiSelector().text("Products").className("android.widget.TextView")';
      const productsUISelector = await $(`android=${selector}`);
      await expect(productsUISelector).toHaveText("Products");
    });
  });