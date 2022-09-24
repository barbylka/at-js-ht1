class TitleForm {
  get form() { return $('form.oxd-form') };
  get titleInput() { return this.form.$('input.oxd-input') };
  get descriptionTextarea() { return this.form.$('textarea[placeholder="Type description here"]') };
  get noteTextarea() { return this.form.$('textarea[placeholder="Add note"]') };
  get submitButton() { return this.form.$('button[type="submit') };

  async submitForm() {
    await this.submitButton.click();
  }
  async addJobTitle(data) {
    await this.titleInput.setValue(data.TITLE);
    await this.descriptionTextarea.setValue(data.DESCRIPTION);
    await this.noteTextarea.setValue(data.NOTE);
    await this.submitForm();
  }

  async modifyDescription(onRemove, data) {
    await onRemove(this.descriptionTextarea);
    await this.descriptionTextarea.setValue(data.NEW_DESCRIPTION);
    await this.submitForm();
  }
}

module.exports = new TitleForm();
