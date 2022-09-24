class DeleteJobModal {
  get modalContainer() { return $('div.oxd-sheet'); };
  get deleteButton() { return this.modalContainer.$('button.oxd-button--label-danger'); };

  async confirmDelete() {
    await this.deleteButton.click();
  }
}

module.exports = new DeleteJobModal();
