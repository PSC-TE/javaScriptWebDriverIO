
class ContactsPage{
    get createContactPlusButton(){
        return $("//img[@title='Create Contact...']")
    }

    async clickCreateContactPlusButton(){
        await this.createContactPlusButton.click();
    }
}
module.exports = new ContactsPage();