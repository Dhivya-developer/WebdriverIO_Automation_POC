import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
}


Given(/I am on the Automation practice website page$/,function(){

    browser.url("http://automationpractice.com/index.php");    
    browser.pause(7000);

     //let titlestr = browser.getTitle();
    // console.log("Title is",browser.getTitle() );
   
 
    });

Given(/I signin on the page$/,function(){
    LoginPage.signIn();
    browser.pause(5000);
   
});

Given(/I create an account by entering$/,async(emailaddress) =>{

    //To be implemented
   
});

When(/I register by entering personal Information details$/,function(){
   
    //To be implemented
   
});


Then(/I should see the correct Firstname and surname displayed on the page$/,function(){
    
    //To be implemented
   
});

Then(/I add a product to the cart$/,function(){
    
    //To be implemented
   
});


Then(/I proceed to checkout the product$/,function(){
   
    //To be implemented
   
});



Then(/I should see correct product details displayed$/,function(){
    
   
});
