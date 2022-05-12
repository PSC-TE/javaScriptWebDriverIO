const { assert } = require("chai");

describe('suite', () => {
    it('switchwindow', async() => {
        await browser.url("http://demo.automationtesting.in/Windows.html");
        let parentWindow= await browser.getWindowHandle();
        let parentUrl= await browser.getUrl();
        await $("//button[text()='    click   ']").click();

        let allWindows=await browser.getWindowHandles()
        for (const childWindows of allWindows) {
            if(!(childWindows==parentWindow)){
            await browser.switchToWindow(childWindows);
            break;
            }
        }
        let childTitle=await browser.getTitle();
        await assert.equal(childTitle,'Selenium', 'childTitle not matching');

        await browser.switchWindow(parentUrl);
        let parentTitle=await browser.getTitle();
        assert.equal(parentTitle,'Frames & windows','title not matching')
        
        
    });
});