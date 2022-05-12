const { assert } = require("chai");

describe('suite', () => {
    it('dynamicElement', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.flipkart.com/");
        await $("//button[text()='✕']").click();
        await $("//input[@name='q']").setValue("moblies");
        await $("//button[@class='L0Z3Pu']").click();

        await browser.pause(3000)
        let mobiles = await $$("//div[@class='_3pLy-c row']/descendant::div[@class = '_4rR01T']")
        // let mobilePrice=await $("//div[text()='"+mobileName+"']/ancestor::div[@class='_3pLy-c row']/descendant::div[@class='_30jeq3 _1_WHN1']").getText();


        for (const mobile of mobiles) {
            let mobileName=await mobile.getText();
            let mobilePrice=await $("//div[text()='"+mobileName+"']/ancestor::div[@class='_3pLy-c row']/descendant::div[@class='_30jeq3 _1_WHN1']").getText();
            console.log("=======mobile name========"+mobileName+"=====mob Price======"+mobilePrice);
        }


        // let mobileName="REDMI 9i Sport (Carbon Black, 64 GB)";
        // await $("//div[text()='"+mobileName+"']/ancestor::div[@class='_3pLy-c row']/descendant::div[@class='_30jeq3 _1_WHN1']").scrollIntoView();
        // browser.pause(2000);
        // let mobilePrice=await $("//div[text()='"+mobileName+"']/ancestor::div[@class='_3pLy-c row']/descendant::div[@class='_30jeq3 _1_WHN1']").getText();

       
        
       });
});

//div[text()='May 2022']/ancestor::table[@class='aSgzfL']/descendant::button[text()='12']