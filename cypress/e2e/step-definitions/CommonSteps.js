const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { homePage } = require("../TestController")

/**
 * This class is used to define the steps which can be shared with all of features
 */

When('I click on MarsAir logo', () => {
    homePage.clickHomeLogo();
})