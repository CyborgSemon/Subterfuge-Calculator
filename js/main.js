const your_add = document.querySelector('.your-specialists-add');
const their_add = document.querySelector('.their-specialists-add');

const your_dialog = new mdc.dialog.MDCDialog(document.querySelector('.your-specialists'));
const their_dialog = new mdc.dialog.MDCDialog(document.querySelector('.their-specialists'));

your_add.addEventListener('click', ()=> {
  your_dialog.open();
});

their_add.addEventListener('click', ()=> {
  their_dialog.open();
});






window.mdc.autoInit();