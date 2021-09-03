import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInLink() { return $('//a[contains(text(),"Sign in")]') }
   
   
    waitForloginPageToLoad () {
        if(!this.signInLink.isDisplayed()){
          this.signInLink.waitForDisplayed(10000);
        }
      }
      signIn () {
         this.waitForloginPageToLoad();
         this.signInLink.click();
         browser.pause(1000);

}}

export default new LoginPage();
