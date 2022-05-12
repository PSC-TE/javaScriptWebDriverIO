class orgInformation{
    get orgTitle(){
        return $("//span[@class='dvHeaderText']")
    }

    async getOrgTitleText(){
        await this.orgTitle.getText();
    }
}
module.exports = new orgInformation()