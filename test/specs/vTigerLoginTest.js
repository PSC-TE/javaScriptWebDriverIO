let lp= require("../pageobjects/vTigerLoginPage")
let hp= require("../pageobjects/vTigerHomePage")
describe('vTigerSuite', () => {
    it('LoginPage', async() => {
        await lp.loginToVTiger('admin','admin');
        await wdioExpect(browser).toHaveTitleContaining("Home - vtiger CRM 5 -")
    });

    it('Login&Logout',async () => {
        await lp.loginToVTiger('admin','admin');
        await wdioExpect(browser).toHaveTitleContaining("Home - vtiger CRM 5 -")
        await hp.logoutAction();
        
    });

    it.only('login using basefile', () => {
        
    });
});