/// <reference types="Cypress" />


import { allureReporter, tableElement, cyUtils, webElement } from '../../../../../e2e/TestController';
import BasePage from './BasePage';

/**
 * Page Object class of HomePage
 */
class HomePage extends BasePage {

    title = 'Mars Airlines: Home';

    welcomeText = 'div#content > h2';
    bookATicketText = 'div#content > h3';
    departingSelect = 'select#departing';
    returningSelect = 'select#returning';
    promotionalCodeInput = 'input#promotional_code';
    searchButton = 'input[value="Search"]';

    selectDeparting(departingValue) {
        webElement.select(this.departingSelect, departingValue, 'Departing')
    }

    selectReturning(returningValue) {
        webElement.select(this.returningSelect, returningValue, 'Returning',)
    }

    enterPromotionalCode(promoCode) {
        webElement.type(this.promotionalCodeInput, promoCode, 'Promotional Code')
    }

    clickSearch() {
        webElement.click(this.searchButton)
    }

    validateWelComeText(){
        webElement.validateTextContains(this.welcomeText, 'Welcome to MarsAir!', 'Welcome to MarsAir text')
    }

    validateHomePage() {
        this.validateUrl();
        this.validateTitle();
    }

}

export default HomePage;