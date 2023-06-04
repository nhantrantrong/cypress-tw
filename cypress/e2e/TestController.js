
import AllureReporter from '../support/src/core/AllureReporter';
import CypressUtils from '../support/src/core/utils/CypressUtils';
import DateTimeUtils from '../support/src/core/utils/DateTimeUtils';
import StringUtils from '../support/src/core/utils/StringUtils';
import WebElement from '../support/src/core/ui/WebElement';
import TableElement from '../support/src/core/ui/TableElement';
import HomePage from '../support/src/mar-airlines/ui/pageObject/HomePage';
import SearchResultPage from '../support/src/mar-airlines/ui/pageObject/SearchResultPage';


/**
 * This class is used to define class instances and some setUp common method before running tests
 */

//====== Retrieve Configs information
const testEnv = Cypress.env('testEnv');

export const configs = {
    api: Cypress.env(testEnv).api,
    ui: Cypress.env(testEnv).ui
};

//====== Core classes initialization
//==== Allure Reporter class instance
export const allureReporter = new AllureReporter();

//==== Core class instances
export const webElement = new WebElement();
export const tableElement = new TableElement();

//==== Utils class instances
export const dateTimeUtils = new DateTimeUtils();
export const stringUtils = new StringUtils();
export const cyUtils = new CypressUtils();

//====== Application Under Test classes initialization
//==== APIs
//=== API Request class instances

//=== API Response class instances

//====== UIs
//==== Pages class instances
export const homePage = new HomePage();
export const searchResultPage = new SearchResultPage();

//====== Setup Methods
export function setupUITest() {
    homePage.open();
};
