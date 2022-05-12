// var assert = require('chai').assert;
// var expect = require('chai').expect
var should = require('chai').should();

describe('TestSuit1', () => {
    it.skip('LoginToVtiger', async()=> {
        await browser.url('http://localhost:8888/');
        let loginUrl=console.log(await browser.getUrl());
        expect(browser).toHaveUrl('loginUrl');

        await $("input[name='user_name']").setValue("admin");
        await $("//input[@name='user_password']").addValue("admin");
        await $("#submitButton").click();
        console.log(await browser.getTitle()); 
        expect(browser).toHaveTitleContaining("Home - vtiger CRM");
        console.log(await browser.getUrl());
    });

    it('LoginWithInvalidCredentials', async() => {
        await browser.url("http://localhost:8888/");
        let loginUrl=console.log(await browser.getUrl());
        wdioExpect(browser).toHaveUrl('loginUrl');

        await $("//input[@name='user_name']").addValue("admin");
        await $("//input[@name='user_password']").setValue("xyzwer");
        await $("#submitButton").click();
        let errorEle = await $("//div[contains(text(),'You must specify a valid username and password.')]")
        let errorMsg= await errorEle.getText();
        // expect(errorEle).toHaveTextContaining(errorMsg);
        // await assert.equal(errorMsg, 'You must specify a valid username and password.',"test is passed")
        expect(errorMsg).to.equal('You must specify a valid username and password.');
    });
});