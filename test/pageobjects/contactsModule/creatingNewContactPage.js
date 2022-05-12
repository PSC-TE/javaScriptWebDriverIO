
class createContact{
    get salutation(){
       return $("//select[@name='salutationtype']")
    }

    async selectSalutation(){
        await this.salutation.selectByAttribute("value","Mr.");
    }

    get firstName(){
        return $("//input[@name='firstname']")
    }

    async inputFirstName(firstName){
        await this.firstName.setValue(firstName)
    }

    get lastName(){
        return $("//input[@name='lastname']")
    }

    async enterLastName(lastName){
        await this.lastName.setValue(lastName)
    }

    
    get organizationNamePlusButton(){
        return $("//img[@title='Select']")
    }

    async clickOrganizationNamePlusButton(orgName){
        await this.organizationNamePlusButton.click();
    }

    get assignedToGroup(){
        return $("//input[@value='T']");
    }

    async clickAssignedToGroupButton(){
        await this.assignedToGroup.click();
    }

    get assignedToDropDown(){
        return $("//select[@name='assigned_group_id']")
    }
    
    async selectAssignedValue(attributeName, attributeValue){
        await this.assignedToDropDown.selectByAttribute(attributeName,attributeValue);
    }

    get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }
}
module.exports =new createContact()