import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Deployment Test Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the right title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Deployment Method Demonstrator');
  });

  it('should have two panels', () => {
    page.navigateTo();
    expect(page.getPanels().count()).toEqual(2);
  });

  it('should have an input box in each panel', () => {
    page.navigateTo();
    expect(page.getPanelInputBoxes().count()).toEqual(2);
  });

  it('should have a button in each panel', () => {
    page.navigateTo();
    expect(page.getPanelButtons().count()).toEqual(2);
  });

  it('should not have any tweets on initial load', () => {
    page.navigateTo();
    expect(page.getTweets().count()).toEqual(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
