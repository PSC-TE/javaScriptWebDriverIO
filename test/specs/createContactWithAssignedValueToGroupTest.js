let hp= require("../pageobjects/vTigerHomePage");
let cp= require ("../pageobjects/contactsModule/vTigerContactsPage");
let cnp= require("../pageobjects/contactsModule/creatingNewContactPage");
let cip = require("../pageobjects/contactsModule/contactsInformationPage");
let orgPop= require("../pageobjects/contactsModule/organizationPopUpPage")
let eutils= require("../../GenericUtility/excelUtility");
let wUtils= require("../../GenericUtility/webDriverIOUtility");
const { assert } = require("chai");
const { default: AllureReporter } = require("@wdio/allure-reporter");
let excelData = eutils("./testData/testSpecificData.xlsx","Sheet1")
// console.log(excelData);
// console.log(excelData[0].AssignedTo);
describe('suite', () => {
    it('createContactWithOrganizationAndAssignGroup', async() => {

        AllureReporter.addFeature("ContactModule")
        let randomValue= Math.random()

        let firstName= excelData[0].FirstName
        let lastName= excelData[0].LastName+randomValue
        let organizationName= excelData[0].OrganizationName
        let assignedTo = excelData[0].AssignedTo
        await hp.clickContactsModule();
        await cp.clickCreateContactPlusButton();
        await cnp.inputFirstName(firstName);
        await cnp.enterLastName(lastName);
        let parent =await browser.getWindowHandle()
        await cnp.clickOrganizationNamePlusButton()

        await wUtils.switchToWindow(parent)
    
        let parent2= await browser.getWindowHandle()
        await orgPop.inputOrgTextField(organizationName);
        await orgPop.clickSearchButton();
        await orgPop.clickOrgName(organizationName);
        await wUtils.switchToWindow(parent2)

        await cnp.clickAssignedToGroupButton();
        
        await cnp.selectAssignedValue("value", assignedTo);
        await browser.pause(3000);

        await cnp.clickSaveButton();

        // let actualContactName=await cip.getContactNameTitle();
        // console.log(actualContactName);
        await browser.pause(3000);
        await wdioExpect(cip.contactName).toHaveTextContaining(lastName);
        
    });
});