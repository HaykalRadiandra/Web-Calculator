const calculator = {
  displaynumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
 
function updateDisplay() {
  document.querySelector('#displaynumber').innerText = calculator.displayNumber;
}
 
function clearCalculator() {
  calculator.displaynumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
 
function inputDigit(digit) {
  calculator.displaynumber += digit;
}
 
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
    
    inputDigit(target.innerText);
    updateDisplay();
  });
}