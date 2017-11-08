import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for about page.
 *
 * @author Glenn Renfro
 */
export class AboutPage {
  navigateTo() {
    return browser.get('#/about');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
