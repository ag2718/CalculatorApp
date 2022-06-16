const equalsButton = document.querySelector('[data-eq]');
const numbers = document.querySelectorAll('[data-num]');
const operations = document.querySelectorAll('[data-op]');
const allClear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-del]');
let previousOperand = document.querySelector('[data-prev-operand]');
let currentOperand = document.querySelector('[data-current-operand]');

compute = function () {
  const prevNum = parseFloat(previousOperand.innerText.slice(0, -2));
  const currentNum = parseFloat(currentOperand.innerText);
  const operation = previousOperand.innerText.slice(-1);
  switch (operation) {
    case "+":
      return prevNum + currentNum;
    case "-":
      return prevNum - currentNum;
    case "x":
      return prevNum * currentNum;
    case "÷":
      return prevNum / currentNum;
  }
}

numbers.forEach(button => {   //Enabling functionality for numbers
  button.addEventListener('click', function () {
    if (button.innerText === '.' && currentOperand.innerText.includes('.')) return
    currentOperand.innerText = `${currentOperand.innerText + button.innerText}`;
    if (previousOperand.innerText.includes("="))
      previousOperand.innerText = '';
    console.log("Append!");
  })
})

operations.forEach(button => {  //Enabling functionality for operations
  button.addEventListener('click', function () {
    if (currentOperand.innerText === '') return;
    previousOperand.innerText = `${currentOperand.innerText} ${button.innerText}`;
    currentOperand.innerText = '';
  })
})

equalsButton.addEventListener('click', function () { //Computing when equals button clicked
  if (previousOperand.innerText === '') return
  let temp = currentOperand.innerText;
  currentOperand.innerText = compute();
  previousOperand.innerText = `${previousOperand.innerText} ${temp} =`

})

allClear.addEventListener('click', function () { //Enabling user to clear calculator
  previousOperand.innerText = '';
  currentOperand.innerText = '';
  console.log('All clear!');
})

del.addEventListener('click', function () { //Enabling user to delete the last number
  currentOperand.innerText = currentOperand.innerText.slice(0, -1);
  console.log('Deleted!');
})
