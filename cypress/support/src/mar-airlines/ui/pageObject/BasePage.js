/// <reference types="Cypress" />

import WebPage from '../../../core/ui/WebPage';
import { allureReporter, webElement } from '../../../../../e2e/TestController';

/**
 * Page Object class of HomePage
 */
class BasePage extends WebPage {

    homeLogo = 'a[href="/NhanTranTrong"]';
    
    clickHomeLogo() {
        webElement.click(this.homeLogo, 'Home');
    }
}

export default BasePage;