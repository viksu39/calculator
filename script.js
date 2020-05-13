let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = () => {
    calculatorScreen.value = prevNumber+calculationOperator+currentNumber;
}

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result;
    if(prevNumber.includes('%')){
        prevNumber = prevNumber.substring(0,prevNumber.length-1);
        prevNumber = prevNumber / 100;
    }
    if(currentNumber.includes('%')){
        currentNumber = currentNumber.substring(0,currentNumber.length-1);
        currentNumber = currentNumber / 100;
    }
    switch (calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
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
    calculationOperator = '';
    prevNumber = '';
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += dot;
}

const inputPercentage = () => {
    if(currentNumber.includes("%")){
        return;
    }
    currentNumber += '%';
}

const numbers = document.querySelectorAll(".number");
//console.log(numbers);
numbers.forEach((number) => {
  //console.log(number);
  number.addEventListener("click", (event) => {
      //console.log(event.target.value);
      inputNumber(event.target.value);
      //console.log(currentNumber);
      updateScreen();
  });
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen();
    });
})

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", (event) => {
    calculate();
    updateScreen();
})

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", (event) => {
    clearAll();
    updateScreen();
})

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen();
})

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
    inputPercentage();
    updateScreen();
})