class WebDriverIoUtility{
    async switchToWindow(parent){
        let child=await browser.getWindowHandles()
        for (const childWin of child) {
            
            if(!(childWin==parent)){
            await browser.switchToWindow(childWin);
            break;
            }
        }
    }

    async selectDropDownByVisibleText(selector,text){
        await $(selector).selectByVisibleText(text)
    }

    async selectDropDownByAttribute(selector, attribute, value){
        await $(selector).selectByAttribute(attribute, value)
    }

    async waitForClickable(selector){
        await $(selector).waitForClickable({ timeout, reverse, timeoutMsg, interval })
    }

    async takeElementScreenshot(elementId){
        await browser.takeElementScreenshot(elementId, scroll)
    }

    async takeScreenshot(){
        await browser.takeScreenshot();
    }



}
module.exports = new WebDriverIoUtility()