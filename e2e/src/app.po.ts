import { browser, by, element } from 'protractor';

export class AppPage {
  
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.navbar-brand div')).getText() as Promise<string>;
  }
  
  getTitle() {
    return element(by.css('.navbar-brand div'))
  }
  getCards() {
    return element.all(by.css('mat-card'))
  }
  getReadButton() {
    return element.all(by.css('mat-card mat-card-actions button')).first()  ;//.get(0);
  }
  getConfirmationMessageText() {
    return element.all(by.css('mat-card small')).first().getText();
  }
  getBrandLogo() {
    return element(by.css('.navbar-brand img'))
  }
  
}
