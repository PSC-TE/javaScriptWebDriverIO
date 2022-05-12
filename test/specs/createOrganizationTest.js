let hp = require("../pageobjects/vTigerHomePage");
let op= require("../pageobjects/organizationModule/organizationPage")
let cop = require("../pageobjects/organizationModule/createNewOrgPage")
let oip = require("../pageobjects/organizationModule/organizationInformationPage")
let eUtils = require("../../GenericUtility/excelUtility");
const { default: AllureReporter } = require("@wdio/allure-reporter");
let excelData= eUtils("./testData/testSpecificData.xlsx","Sheet1");

describe('organizationSuite', () => {
    it('createNewOrganization', async() => {
        AllureReporter.addFeature("OrganizationModule")
        let randomValue= Math.random()
        let orgName= excelData[2].OrganizationName+randomValue;
        let assignedTo= excelData[2].AssignedTo;
        await hp.clickOrganizationModule();
        await op.clickOrgPlusButton();
        await cop.enterOrgName(orgName);
        await cop.clickGroupRadioButton();
        await cop.selectAssignedTo("value",assignedTo);
        await cop.clickSaveButton();
        // let actualOrgName=await oip.getOrgTitleText();
        // console.log(actualOrgName);
        await browser.pause(3000);
        await wdioExpect(oip.orgTitle).toHaveTextContaining(orgName)
    });
});