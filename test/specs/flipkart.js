const { assert, should } = require("chai");


describe('FlipkartSuite', () => {
    it('test1', async() => {
        await browser.maximizeWindow();
        await browser.url("https://www.flipkart.com/");
        let currentURl=await browser.getUrl();
        // let title= await browser.getTitle();
        // wdioExpect(browser).toHaveTextContaining(title);

        await $("//button[text()='✕']").click();
        await $("//input[@name='q']").setValue("mobiles");
        await $("//button[@class='L0Z3Pu']").click();

        await $("//div[text()='REDMI 10 (Pacific Blue, 64 GB)']").click();
        let childwin=await browser.getWindowHandles(); 
        console.log(childwin[1]);
        await browser.switchToWindow(childwin[1]);

        let mobPrice= await $("//div[@class='_30jeq3 _16Jk6d']").getText();
        console.log(mobPrice);
        await $("//button[@class='_2KpZ6l _2U9uOA _3v1-ww']").click();

        let cartele=await $("//div[@class='_3fSRat']/descendant::span[@class='_2-ut7f _1WpvJ7']");
        let cartPrice=await $("//div[@class='_3fSRat']/descendant::span[@class='_2-ut7f _1WpvJ7']").getText();
        console.log(cartPrice);
        // await assert.equal(mobPrice, cartPrice, "the price are equals");
        // await expect(mobPrice).to.equal(cartPrice);
        await wdioExpect(cartele).toHaveText(mobPrice);
        
    });
});