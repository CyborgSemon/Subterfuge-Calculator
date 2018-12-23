const fab = document.querySelector('.mdc-fab');
const dialog = new mdc.dialog.MDCDialog(document.querySelector('.assessmentDialog'));

fab.addEventListener('click', () => {
  dialog.open();
});






window.mdc.autoInit();