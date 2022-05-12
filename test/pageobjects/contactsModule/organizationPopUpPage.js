
class orgaizationPopUp{
    get orgTextField(){
        return $("//input[@id='search_txt']")
    }

    async inputOrgTextField(orgName){
        await this.orgTextField.setValue(orgName);
    }

    get searchButton(){
        return $("//input[@name='search']")
    }

    async clickSearchButton(){
        await this.searchButton.click()
    }

    get organizationName(){
        return $("//a[text()='"+orgName+"']")
    }

    async clickOrgName(orgName){
        await $("//a[text()='"+orgName+"']").click();
    }

}
module.exports =new orgaizationPopUp();