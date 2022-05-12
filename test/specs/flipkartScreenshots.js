describe('flipkartSuite', () => {
    it('screenshot', async() => {
        await browser.url("https://www.flipkart.com/");
        // await browser.maximizeWindow();
        await $("//button[text()='✕']").click();
        await $("//div[text()='Electronics']").moveTo();
        await $("//a[text()='Cameras & Accessories']").moveTo();
        await $("//a[text()='Sports & action']").click();
        let parent =await browser.getWindowHandle();
        await $("//div[contains(text(),'IBS ACTION CAMERA ACTION UNDER WATER')]").click();

        let child= await browser.getWindowHandles();
        for (const childwindow of child) {
            if(!(childwindow==parent)){
                await browser.switchToWindow(childwindow);
                break;
            }
        }
        
        let images=await $$("//img[@class='q6DClP']");

        for (let i=0;i<images.length;i++) {
            
            await $(images[i]).saveScreenshot("./screenshot/"+i+".png")
        }
        
    });
});