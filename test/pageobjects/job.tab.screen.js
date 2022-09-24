const { jobTitleData } = require("../constants/constants");

class JobTitlesTab {
  constructor(jobTitle) {
    this.jobTitle = jobTitle
  }

  get addButton() { return $('button.oxd-button'); };
  get newlyAddedTitleCard() { return $(`(//div[text()="${this.jobTitle}"])`) };
  get checkboxNewCard() { return this.newlyAddedTitleCard.$('..').$('..').$('i.oxd-checkbox-input-icon') };


  async clickAddButton() {
    await this.addButton.click();
  }

  async getNewCardDataFromGrid() {
    const data = {
      title: await this.newlyAddedTitleCard.$('..').$('..').$$('div.oxd-table-cell')[1].getText(),
      description: await this.newlyAddedTitleCard.$('..').$('..').$$('div.oxd-table-cell')[2].getText()
    }
    return data
  }

  async checkCheckbox() {
    await this.checkboxNewCard.click();
  }

  async clickRemoveButton() {
    await this.newlyAddedTitleCard.$('..').$('..').$('i.bi-trash').parentElement().click();
  }

  async clickEditButton() {
    await this.newlyAddedTitleCard.$('..').$('..').$('i.bi-pencil-fill').parentElement().click();
  }
}

module.exports = new JobTitlesTab(jobTitleData.TITLE);
