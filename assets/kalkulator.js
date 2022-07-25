const calculator = {
  displayNumber: 0,
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false
};

function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = '0' ;
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
  calculator.displayNumber += digit;
}

const button = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', function (event) {

    // mendapatkan objek elemen yang diklik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
    
  })
}