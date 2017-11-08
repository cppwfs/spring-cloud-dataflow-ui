import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for apps page.
 *
 * @author Glenn Renfro
 */
export class AppsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
