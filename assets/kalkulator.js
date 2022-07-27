const calculator = {
  displaynumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
 
function updateDisplay() {
  document.querySelector('#displaynumber').innerText = calculator.displaynumber;
}
 
function clearCalculator() {
  calculator.displaynumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
 
function inputDigit(digit) {
  if (calculator.displaynumber === '0') {
    calculator.displaynumber = digit;
  } else {  
    calculator.displaynumber += digit;
  }
}

function inversenumber() {
  if (calculator.displaynumber === '0') {
    return;
  }
  calculator.displaynumber = calculator.displaynumber * -1;
}

function handleOperator (operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displaynumber;

    //mengatur ulang nilai display number tombol selanjutnya dimulai dari angka pertama lagi
    calculator.displaynumber = '0';
  } else {
    alert('Operator sudah ditetapkan');
  }
}


const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;

    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return
    }
    
    if (target.classList.contains('negative')) {
      inversenumber();
      updateDisplay();
      return
    }

    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return
    }

    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}