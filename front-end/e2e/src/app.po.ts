import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPanelButtons(){
    return element.all(by.css('div.panel button'));
  }

  getPanelInputBoxes(){
    return element.all(by.css('div.panel input'));
  }

  getPanels(){
    return element.all(by.css('div.panel'));
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getTweets(){
    return element.all(by.css('div.tweet'));
  }
}
