import { browser, by, element } from 'protractor';

export class PokeTweetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getButtons() {
    return element.all(by.css('button')).getText();
  }

  getPostForm() {
    return element(by.css('.post'));
  }

  getSubmitButton() {
    return element(by.css('.submitButton'));
  }

  getNewTweetInput() {
    return element(by.css('.post input'));
  }

  getFeed() {
    return element.all(by.css('.feed'));
  }
}
