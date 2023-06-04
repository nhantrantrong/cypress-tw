/// <reference types="Cypress" />


import { allureReporter, tableElement, cyUtils, webElement } from '../../../../../e2e/TestController';
import BasePage from './BasePage';

/**
 * Page Object class of SearchResultPage
 */
class SearchResultPage extends BasePage {


    titleText = 'div#content > h2';
    messageText = 'div#content > p';
    backLink = 'div#content a';

    validateMessage(message) {
        webElement.validateTextContains(this.messageText, message, 'Search Result Text Message');
    }

    clickBack() {
        webElement.clickByText(this.backLink, 'Back', 'Back button');
    }

    validateValidPromotionCode(promotionCode, discount) {
        const validPromotionCodeText = `Promotional code ${promotionCode} used: ${discount}% discount!`
        webElement.validateTextContains(this.messageText, validPromotionCodeText, 'Valid Promotion Code Text Message');
    }

    validateInvalidPromotionCode(promotionCode){
        const invalidPromotionCodeText = `Sorry, code ${promotionCode} is not valid`
        webElement.validateTextContains(this.messageText, invalidPromotionCodeText, 'Invalid Promotion Code Text Message');
    }

}

export default SearchResultPage;