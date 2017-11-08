import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for runtime page.
 *
 * @author Glenn Renfro
 */
export class RuntimePage {
  navigateTo() {
    return browser.get('#/runtime/apps');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
