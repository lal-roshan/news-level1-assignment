import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('StackRoute Times');
    browser.sleep(1000);
  });
  
  it('should navigate to home when brand-logo is clicked',()=>{
    let element = page.getBrandLogo();
    element.click();
    expect(browser.getCurrentUrl()).toMatch('localhost:4205')
    browser.sleep(1000);
  })

  it('should navigate to home when title is clicked',()=>{
    let element = page.getTitle();
    element.click();
    expect(browser.getCurrentUrl()).toMatch('localhost:4205')
    browser.sleep(1000);
  })
  
  it('should display news article as card',()=>{
    
    let elements = page.getCards();
    expect(elements.count()).toBeGreaterThanOrEqual(1);
    browser.sleep(1000);
  })
  
  it('should add news article to reading list on click of `Read Later` button',()=>{
    let element = page.getReadButton();
    element.click();
    //let confirmationMessage = page.getConfirmationMessageText();
    browser.sleep(1000);
    expect(page.getConfirmationMessageText()).toEqual('This News Article is Bookmarked');
    
  })
  

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  }
  );
});
