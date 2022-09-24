class CommonActions {
  async clearInputValue(input) {
    const inputField = await input;
    await inputField.click();

    await browser.execute((field) => {
      field.value = null
    }, inputField);
  }
}

module.exports = new CommonActions();
