const Page = require('./page');

class AdminPage extends Page {
    get adminLink() { return $('ul.oxd-main-menu').$('a=Admin'); }
    get jobDropdownButton() { return $('li=Job'); }
    get jobTitlesButton() { return $('ul.oxd-dropdown-menu').$('a=Job Titles'); }

    async openJobTitlesPage() {
        await this.adminLink.click();
        await this.jobDropdownButton.click();
        await this.jobTitlesButton.click();
    }
}

module.exports = new AdminPage();
