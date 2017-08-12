import { PokeTweetPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('poke-tweet App', () => {
  let page: PokeTweetPage;

  beforeEach(() => {
    page = new PokeTweetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('WELCOME TO POKE-TWEET!');
  });

   it('should show home button on page load', () => {
    page.navigateTo();
    expect(page.getButtons()).toContain('Home');
  });

  it('should show login button on page load', () => {
    page.navigateTo();
    expect(page.getButtons()).toContain('Log In');
  });

  it('should show post form on page load', () => {
    page.navigateTo();
    expect(page.getPostForm().isDisplayed()).toBeTruthy();
  });

  it('should show post submit button on page load', () => {
    page.navigateTo();
    expect(page.getSubmitButton().isDisplayed()).toBeTruthy();
  });

  it('should be able to create a new post', () => {
    page.navigateTo();
    page.getNewTweetInput().sendKeys('test tweet post');
    page.getSubmitButton().click();
    expect(page.getFeed().count()).toEqual(1);
  });

});
