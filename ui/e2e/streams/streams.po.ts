import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for streams page.
 *
 * @author Glenn Renfro
 */
export class StreamsPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('#/streams/definitions', 60000);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

}
