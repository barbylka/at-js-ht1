class StatusMessageModal {
  get modalcontainer() { return $('div.oxd-toast--success'); };
  get modalMessage() { return this.modalcontainer.$('p.oxd-text--toast-title'); };
}

module.exports = new StatusMessageModal();
