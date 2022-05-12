class organizationPage{
    get createOrgPlusButton(){
        return $("//img[@title='Create Organization...']")
    }

    async clickOrgPlusButton(){
        await this.createOrgPlusButton.click();
    }
}
module.exports = new organizationPage()