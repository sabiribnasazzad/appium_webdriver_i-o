const checkout = {
    loginText: '(//android.widget.TextView[@text="Login"])[1]',
    checkoutText: '//android.widget.TextView[@text="Checkout"]',
    fullNameField: '//android.widget.EditText[@content-desc="Full Name* input field"]',
    address1Field: '//android.widget.EditText[@content-desc="Address Line 1* input field"]',
    address2Field: '//android.widget.EditText[@content-desc="Address Line 2 input field"]',
    city: '//android.widget.EditText[@content-desc="City* input field"]',
    state: '//android.widget.EditText[@content-desc="State/Region input field"]',
    zipCode: '//android.widget.EditText[@content-desc="Zip Code* input field"]',
    country: '//android.widget.EditText[@content-desc="Country* input field"]',
    paymentBtn: '//android.view.ViewGroup[@content-desc="To Payment button"]',
    fullNameValidation: '//android.widget.TextView[@text="Please provide your full name."]',
    addressValidation: '//android.widget.TextView[@text="Please provide your address."]',
    cityValidation: '//android.widget.TextView[@text="Please provide your city."]',
    zipcodeValidation: '//android.widget.TextView[@text="Please provide your zip code."]',
    countryValidation: '//android.widget.TextView[@text="Please provide your country."]'

}

export default checkout