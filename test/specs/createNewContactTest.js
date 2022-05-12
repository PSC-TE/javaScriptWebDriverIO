let hp= require("../pageobjects/vTigerHomePage");
let cp= require ("../pageobjects/contactsModule/vTigerContactsPage");
let cnp= require("../pageobjects/contactsModule/creatingNewContactPage");
let cip = require("../pageobjects/contactsModule/contactsInformationPage");
let eutils= require("../../GenericUtility/excelUtility");
let excelData=eutils("./testData/testSpecificData.xlsx","Sheet1")
const { assert } = require("chai");
const { default: AllureReporter } = require("@wdio/allure-reporter");
// let excelData = require("../../testData/dataFromExcelSheet",S)

describe('suite', () => {
    it('createNewContact', async() => {

        AllureReporter.addFeature("ContactModule")
        let randomNum=Math.random();

        let firstName=excelData[0].FirstName
        // console.log(firstName);
        let lastName = excelData[0].LastName+randomNum
        // console.log(lastName);
        let orgName =excelData[0].OrganizationName

        await hp.clickContactsModule();
        await cp.clickCreateContactPlusButton();
        // await cnp.selectSalutation();
        await cnp.inputFirstName(firstName);
        await cnp.enterLastName(lastName);
        // await browser.pause(3000);
        
        await cnp.clickSaveButton();

        // let actualContactName=await cip.getContactNameTitle();
        // console.log(actualContactName);
        await browser.pause(3000);
        await wdioExpect(cip.contactName).toHaveTextContaining(lastName)
    });
});