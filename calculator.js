
let string = "";
const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const buttonText = button.innerHTML;

    if (buttonText === '=') {
      string = eval(string);
    } else if (buttonText === 'AC') {
      string = '';
    } else {
      string += buttonText;
    }

    inputField.value = string;
  });
});
