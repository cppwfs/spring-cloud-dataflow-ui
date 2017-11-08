import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for jobs page.
 *
 * @author Glenn Renfro
 */
export class JobsPage {
  navigateTo() {
    return browser.get('#/jobs/executions');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
