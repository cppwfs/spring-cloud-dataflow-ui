import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for analytics page.
 *
 * @author Glenn Renfro
 */
export class AnalyticsPage {
  navigateTo() {
    return browser.get('#/analytics/dashboard');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
