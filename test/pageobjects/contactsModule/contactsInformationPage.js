
class contactInformation {
    get contactName(){
        return $("//span[@class='dvHeaderText']")
    }

    async getContactNameTitle(){
        await this.contactName.getText()
    }
}
module.exports = new contactInformation()