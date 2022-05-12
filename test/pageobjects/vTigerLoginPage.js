
class Login {
    get usernameTextField(){
        return $("//input[@name='user_name']")
    }

    async enterUsername(username){
       await this.usernameTextField.setValue(username);
    }
    
    get passwordTextField(){
        return $("//input[@name='user_password']")
    }

    async enterPassword(password){
        await this.passwordTextField.setValue(password);
     }

    get submitButton(){
        return $("#submitButton")
    }

    async clickSubmitButton(){
        await this.submitButton.click()
     }

    async loginToVTiger(url,username, password){
        await browser.url(url);
        await this.usernameTextField.setValue(username);
        await this.passwordTextField.setValue(password);
        await this.submitButton.click();
    }
}
module.exports= new Login();