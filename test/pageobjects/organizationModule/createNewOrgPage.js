class createNewOrg{
    get orgTextField(){
        return $("//input[@name='accountname']")
    }

    async enterOrgName(orgName){
        await this.orgTextField.setValue(orgName)
    }
     
    get groupRadioButton(){
        return $("//input[@value='T']")
    }

    async clickGroupRadioButton(){
        await this.groupRadioButton.click()
    }

    get assignedToDropDown(){
        return $("//select[@name='assigned_group_id']")
    }

    async selectAssignedTo(attributeName, attributeValue){
        await this.assignedToDropDown.selectByAttribute(attributeName,attributeValue)
    }

    get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }
}
module.exports = new createNewOrg ()