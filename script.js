// 'use strict';

// let tempNum = 0;
// let ans = 0;
// let isDot = false;
// let numArr = [];
// let operator = '';
// let numMap = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "zero": 0, "dot": 'dot' };
// let operatorsList = ["add", "minus", "multiply", "divide", "equal"];


// const btnLength = document.querySelectorAll('.btn').length;
// const displayValue = document.querySelector("#ansDisplay");


// for (let i = 0; i < btnLength; i++) {
//   document.querySelectorAll('.btn')[i].addEventListener("click", calculator);
// }

// function calculator() {
//   console.log(`(...${this.id}...)`);

//   if (operatorsList.includes(this.id) && numArr.length === 1 && tempNum != 0) {
//     updateTempNum(this.id);
//     calculate(numArr[0], tempNum);
//     updateOperator(this.id);
//     console.log(`After changes: TempNum= ${tempNum}, numArr= ${numArr}, Operator= ${operator}`);
//     return;

//   } else if (this.id in numMap) {
//     updateTempNum(this.id);
//     console.log(`After changes: TempNum= ${tempNum}, numArr= ${numArr}, Operator= ${operator}`);
//     return;

//   } else if (operatorsList.includes(this.id)) {
//     updateOperator(this.id);
//     console.log(`After changes: TempNum= ${tempNum}, numArr= ${numArr}, Operator= ${operator}`);
//     return;

//   } else if (this.id === "clearInput") {
//     clearValues();
//     console.log(`After changes: TempNum= ${tempNum}, numArr= ${numArr}, Operator= ${operator}`);
//   }
// }

// function updateTempNum(btnId) {
//   if (btnId === "dot") {
//     isDot = true;
//     displayValue.textContent = tempNum + '.';
//     return;

//   } else if (btnId in numMap && isDot === false) {
//     let n = numMap[btnId];
//     tempNum = tempNum * 10 + n
//     displayValue.textContent = tempNum;
//     return;

//   } else if (btnId in numMap && isDot === true) {
//     tempNum = (tempNum * 10 + numMap[btnId]) / Math.pow(10, String(tempNum).length);
//     displayValue.textContent = tempNum;
//   }
// }

// function updateOperator(btnId) {
//   operator = btnId;
//   isDot = false;
//   if (tempNum != 0) {
//     numArr.push(tempNum);
//     tempNum = 0;
//   }
// }

// function calculate(a, b) {
//   switch (operator) {
//     case "add": ans = a + b; break;
//     case "minus": ans = a - b; break;
//     case "multiply": ans = a * b; break;
//     case "divide": ans = a / b; break;
//   }
//   console.log(`Ans is ${ans}`);
//   numArr = [ans];
//   tempNum = 0;
//   displayValue.textContent = ans;
// }

// function clearValues() {
//   if (tempNum != 0) {
//     tempNum = 0;
//     displayValue.textContent = tempNum;

//   } else {
//     numArr.pop();
//     operator = ""
//     displayValue.textContent = tempNum;
//   }
// }

// // ---------------------------------------------------------------------------------


'use strict';

let tempNum = '';
let ans = 0;
// let isDot = false;
let numArr = [];
let operator = '';
let numMap = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "zero": 0, "dot": '.' };
let operatorsList = ["add", "minus", "multiply", "divide", "equal"];

const calDisplay = document.querySelector("#ansDisplay");
const btnList = document.querySelectorAll(".btn");

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", calculator)
};

function calculator() {
  console.log(this.id);
  if (this.id in numMap) {
    updateCalDisplay(this.id);

  } else if (operatorsList.includes(this.id)) {
    if (numArr.length === 1 && tempNum != '') {
      calculate(Number(numArr[0]), operator, this.id);
    } else {
      updateOperator(this.id)
    };

  }
  console.log(`tempNum: ${tempNum}, numArr: String[${numArr}], operator: ${operator}`);
}

function updateCalDisplay(btnId) {
  tempNum += numMap[btnId];
  calDisplay.innerText = tempNum;
}

function updateOperator(btnId) {
  if (btnId != "equal" || btnId != "clearInput") operator = btnId;
  numArr.push(Number(calDisplay.innerText));
  calDisplay.innerText = '';
  tempNum = '';

}

function calculate(a, operator, btnId) {
  console.log('checking');
  console.log(`operator: ${operator}`);
  console.log(`btnId: ${btnId}`);
  const b = Number(calDisplay.innerText);
  switch (operator) {
    case "add": ans = a + b; break;
    case "minus": ans = a - b; break;
    case "multiply": ans = a * b; break;
    case "divide": ans = a / b; break;
  }
  numArr = [String(ans)];
  console.log(numArr);
  calDisplay.innerText = String(ans);
  if (btnId != "equal" || btnId != "clearInput") operator = btnId;
  tempNum = '';
}