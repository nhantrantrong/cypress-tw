const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { searchResultPage } = require("../TestController")

/**
 * This class is used to define the steps which can be shared with all of features
 */


Then('I should see valid message for promotion code {string} with {string} discount', (promoCode, discount) => {
    searchResultPage.validateValidPromotionCode(promoCode, discount);
})

Then('I should see invalid promotion code message for promotion code {string}', (promoCode) => {
    searchResultPage.validateInvalidPromotionCode(promoCode);
})

Then('I should see {string} message', (message) => {
    searchResultPage.validateMessage(message);
})