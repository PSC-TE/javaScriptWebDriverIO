const { assert } = require("chai");
let wUtils= require("../../GenericUtility/webDriverIOUtility")
describe('suite', () => {
    it('createLead', async() => {
        // await browser.maximizeWindow();
        // await browser.url("http://localhost:8888/");
        // await $("//input[@name='user_name']").setValue("admin");
        // await $("//input[@name='user_password']").setValue("admin");
        // await $("#submitButton").click();
        let contactLastName="Bajaj";
        await $("//a[text()='Contacts']").click();
        await browser.pause(3000);
        wUtils.selectDropDownByAttribute("//select[@id='bas_searchfield']","value","lastname")
        // await $("//select[@id='bas_searchfield']").selectByAttribute("value","lastname");
        await browser.pause(3000);
        await $("//input[@name='search_text']").setValue(contactLastName);
        await $("//input[@name='submit']").click();
        let parent=await browser.getWindowHandle();
        // await $("//a[text()='"+contactLastName+"']/ancestor::tr[@class='lvtColData']/descendant::a[text()='edit']").click();
        await $("//a[text()='"+contactLastName+"']/ancestor::tr[@bgcolor='white']/descendant::span[@vtfieldname='email']/preceding-sibling::a").click();

        await wUtils.switchToWindow(parent)
        let title=await browser.getTitle();
        await assert.equal(title,"Compose Mail","title do not match");
        await browser.closeWindow();
        
        // let pageTitle =await $("//span[@class='lvtHeaderText']").getText();
        // assert(pageTitle,'Clark3685 Robert - Editing Contact Information','page title do not match')
    });

});
//a[text()='Clark3685']/ancestor::tr[@class='lvtColData']/descendant::a[text()='edit']
