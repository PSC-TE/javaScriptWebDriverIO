class HomePage {
    get userImage(){
        return $("//img[@src='themes/softed/images/user.PNG']");
    }
    get signOutButton (){
        return $("//a[text()='Sign Out']");
    }

    get organizationModule(){
        return $("//a[text()='Organizations']");
    }

    async clickOrganizationModule(){
        await this.organizationModule.click();
    }

    get contactsModule(){
        return $("//a[text()='Contacts']");
    }

    async clickContactsModule(){
        await this.contactsModule.click();
    }

    get leadsModule(){
        return $("//a[text()='Leads']");
    }

    async clickLeadsModule(){
        await this.leadsModule.click();
    }

    get opportunitiesModule(){
        return $("//a[text()='Opportunities']");
    }

    async clickOpportunitiesModule(){
        await this.opportunitiesModule.click();
    }

    async logoutAction(){
        await this.userImage.moveTo();
        await browser.pause(3000);
        await this.signOutButton.click();
    }
}
module.exports = new HomePage()