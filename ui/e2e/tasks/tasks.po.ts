import { browser, by, element } from 'protractor';

/**
 * E2E Page Object for tasks page.
 *
 * @author Glenn Renfro
 */
export class TasksPage {
  navigateTo() {
    return browser.get('#/tasks/definitions');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
