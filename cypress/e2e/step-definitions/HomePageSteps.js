const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { homePage } = require("../TestController")

/**
 * This class is used to define the steps which can be shared with all of features
 */

Given('I open Mars Airline home page', () => {
    homePage.open();
})

When('I search flight with {string}, {string} and {string}', (departing, returning, promoCode) => {
    homePage.selectDeparting(departing);
    homePage.selectReturning(returning);
    homePage.enterPromotionalCode(promoCode);
    homePage.clickSearch();
})

Then('I should be on the Home page', (message) => {
    homePage.validateHomePage();
})
