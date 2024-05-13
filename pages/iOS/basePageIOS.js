const basePageIos = {

    hamburgerButton: '~tab bar option menu',
    loginText: '//XCUIElementTypeOther[@name="menu item log in"]',
    inputField: '-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]',
    passwordField: '-ios predicate string:name == "Password input field"',
    loginButton: '//*[@name="Login button"]',
    message: '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView',
    productsButton: '//XCUIElementTypeStaticText[@name="Products"]'
 }

 export default basePageIos