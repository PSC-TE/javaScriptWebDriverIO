const { assert } = require("chai");

describe('suite', () => {
   it('handleActionOfMouse', async() => {
       await browser.maximizeWindow();
       await browser.url("https://demoapp.skillrary.com/");
       await $("//a[text()='COURSE']").moveTo();
       await browser.pause(5000);
       await $("//a[text()='Selenium Training']").click();
       let courseTitle=await browser.getTitle();
       await assert.equal(courseTitle,'SkillRary Courses','title do not match')
       await $("#add").doubleClick();
       await browser.pause(2000);
       await $("//button[text()=' Add to Cart']").click();
        let alertmsg=await browser.getAlertText();
       await assert.equal(alertmsg,'Are you sure you want to add to cart ?','alert msg is not equal')

       await browser.dismissAlert();
       


   }); 
});