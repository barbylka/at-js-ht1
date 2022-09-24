const Page = require('./page');

class LoginPage extends Page {
    get nameInput() { return $('form input[name="username"]'); }
    get passwordInput() { return $('form input[name="password"]'); }
    get submitButton() { return $('button[type="submit"]'); }
    get credentialContainer() { return $('div.orangehrm-demo-credentials'); }

    async login(name, password) {
        await this.nameInput.setValue(name);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async getValidCredentials() {
        const nameCredential = await this.credentialContainer.$$('p.oxd-text')[0].getText();
        const passwordCredential = await this.credentialContainer.$$('p.oxd-text')[1].getText();
        const objValidCredentials = {
            name: await nameCredential.match(/Username : (\w+)/)[1],
            pwd: await passwordCredential.match(/Password : (\w+)/)[1]
        };
        return objValidCredentials
    }

    open() {
        return super.open('/')
    }
}

module.exports = new LoginPage();
