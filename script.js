'use strict';

let tempNum = 0;
let ans = 0;
let numArr = [];
let operator = '';
let numbersList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
let operatorsList = ["add", "minus", "multiply", "divide", "equal"];


const btnLength = document.querySelectorAll('.btn').length;
const displayValue = document.querySelector("#ansDisplay");


for (let i = 0; i < btnLength; i++) {
  document.querySelectorAll('.btn')[i].addEventListener("click", calculator);
}

function calculator() {
  console.log(`(...${this.id}...)`);
  console.log(`Begin with TempNum: ${tempNum}, numArr: ${numArr}, Operator: ${operator}`);
  if (operator !== '' && numArr.length === 1 && tempNum != 0 && operatorsList.includes(this.id)) {
    updateTempNum(this.id);
    calculate(numArr[0], tempNum);
    updateOperator(this.id);
    return;
  } else if (numbersList.includes(this.id)) {
    updateTempNum(this.id);
    return;
  } else if (operatorsList.includes(this.id)) {
    updateOperator(this.id);
    return;
  }

}

function updateTempNum(btnId) {
  if (numbersList.includes(btnId)) {
    let n = 1;
    switch (btnId) {
      case "one": n = 1; break;
      case "two": n = 2; break;
      case "three": n = 3; break;
      case "four": n = 4; break;
      case "five": n = 5; break;
      case "six": n = 6; break;
      case "seven": n = 7; break;
      case "eight": n = 8; break;
      case "nine": n = 9; break;
      case "zero": n = 0; break;
    }
    tempNum = tempNum * 10 + n
    displayValue.textContent = tempNum;
  }
}

function updateOperator(btnId) {
  operator = btnId;
  if (tempNum != 0) numArr.push(tempNum);
  tempNum = 0;
}

function calculate(a, b) {
  console.log(`Calculating...`);
  switch (operator) {
    case "add": ans = a + b; break;
    case "minus": ans = a - b; break;
    case "multiply": ans = a * b; break;
    case "divide": ans = a / b; break;
  }
  console.log(`Ans is ${ans}`);
  numArr = [ans];
  tempNum = 0;
  displayValue.textContent = ans;
}