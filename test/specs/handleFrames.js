const { assert } = require("chai");

describe('suite', () => {
    it('handleframes', async() => {
        await browser.url("https://chercher.tech/practice/frames-example-selenium-webdriver");
       
        let frame1= await $("#frame1");
        await browser.switchToFrame(frame1)
        await $("//b[@id='topic']/..//input").setValue('webDriverIO');
        browser.pause(2000);
        let inputText= await $("//b[@id='topic']/..//input").getValue();
        await assert.equal(inputText,'webDriverIO','the input text do not match.');
        let frame2=await $('#frame3');
        await browser.switchToFrame(frame2);
        await $("#a").click();
        await browser.pause(2000);

        await browser.switchToFrame(null);
        let text=await $("//label//span").getText();
        await assert.equal(text,'Not a Friendly Topic','text do not match');
        let frame3=await $('#frame2');
        await browser.switchToFrame(frame3);
        await $('#animals').selectByVisibleText('Avatar');
        let animal=await $('#animals').getValue();
        await assert.equal(animal,'avatar','animal name do not match')
    });
});