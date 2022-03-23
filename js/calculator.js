let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimalBtn = document.querySelector(".decimal");

calculatorScreen.value = currentNumber;

const updateScreen = (number) => {
  console.log(number);
  console.log(parseFloat(number));
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber == "0") currentNumber = number;
  else currentNumber += number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener("click", (e) => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  prevNumber = parseFloat(prevNumber);
  currentNumber = parseFloat(currentNumber);
  switch (calculationOperator) {
    case "+":
      result = prevNumber + currentNumber;
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }

  currentNumber = result;
  calculationOperator = "";
};

clearBtn.addEventListener("click", (e) => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

decimalBtn.addEventListener("click", (e) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) return;
  currentNumber += dot;
};
