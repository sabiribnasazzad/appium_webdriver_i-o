import testData from "../../data_files/test_data.js"
import basePageIos from "../../pages/iOS/basePageIOS.js"

describe("My Login Demo", () => {

    beforeEach(async () => {

      await $(basePageIos.hamburgerButton).click()
      await $(basePageIos.loginText).click()
      
    });
  
    it("should not login with invalid credentials", async () => {

        await $(basePageIos.inputField).setValue(testData.wrongEmail)
        await $(basePageIos.passwordField).setValue(testData.wrongPassword)
        await $(basePageIos.loginButton).click()
        
        await expect($('~Provided credentials do not match any user in this service.'))
            .toHaveText("Provided credentials do not match any user in this service.");
    });
  
    it("should login with valid credentials", async () => {
  
        await $(basePageIos.inputField).setValue(testData.userEmail)
        await $(basePageIos.passwordField).setValue(testData.userPassword)
        await $(basePageIos.loginButton).click()
        await expect($(basePageIos.productsButton)).toHaveText("Products");
  
    });
  });