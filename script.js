// 'use strict';

// let tempNum = '';
// let ans = 0;
// let numArr = [];
// let operator = '';
// let numMap = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "zero": 0, "dot": '.', "negative": -1 };
// let operatorsList = ["add", "minus", "multiply", "divide", "equal"];

// const calDisplay = document.querySelector("#ansDisplay");
// const btnList = document.querySelectorAll(".btn");

// for (let i = 0; i < btnList.length; i++) {
//   btnList[i].addEventListener("click", calculator)
// };

// function calculator() {
//   console.log(`(${this.id})`);
//   if (this.id in numMap) {
//     updateCalDisplay(this.id);

//   } else if (this.id === "clearInput") {
//     clear();

//   } else if (operatorsList.includes(this.id)) {
//     if (numArr.length === 1 && tempNum != '') {
//       calculate(Number(numArr[0]), operator, this.id);
//       if (this.id !== 'equal') operator = this.id;

//     } else {
//       updateOperator(this.id);
//     };
//   }

//   console.log(`After processing: tempNum= ${tempNum}, numArr= String[${numArr}], operator= ${operator}`);
// }

// function updateCalDisplay(btnId) {
//   if (tempNum[tempNum.length - 1] === '.' && btnId === "dot") {
//     return;
//   } else if (btnId === 'negative' && tempNum === '' && numArr.length === 1) {
//     // Handle clicking 'negative' after clicking 'equal', where tempNum is empty now, and numArr has a length of 1
//     let lastAns = numArr[0];
//     if (lastAns[0] === '-') {
//       const revertNewNum = lastAns.slice(1, lastAns.length);
//       tempNum = revertNewNum;
//     } else {
//       tempNum = '-' + numArr[0];
//     }
//     numArr.pop();

//   } else if (btnId === "negative" && tempNum[0] != '-') {
//     // Handle clicking 'negative' after inputting some numbers and is storing in tempNum
//     console.log(`Turning number to be negative`);
//     tempNum = String("-") + tempNum;
//     console.log(tempNum);

//   } else if (btnId === "negative" && tempNum[0] === '-') {
//     // Handle clicking 'negative' on an tempNum with prefix = '-' to revert the tempNum from negative value to positive value
//     console.log(`Revering the negative`);
//     const revertNewNum = tempNum.slice(1, tempNum.length);
//     tempNum = revertNewNum;
//     console.log(tempNum);


//   } else if (btnId !== "negative") {
//     tempNum += numMap[btnId];
//   };
//   calDisplay.innerText = tempNum;
// }

// function updateOperator(btnId) {
//   if (btnId !== 'equal' && btnId !== 'clearInput') {
//     console.log(`Updating operator from ${operator} to ${btnId}`);
//     operator = btnId;
//   }
//   if (tempNum != '') {
//     numArr.push(Number(calDisplay.innerText));
//   }
//   calDisplay.innerText = '';
//   tempNum = '';

// }

// function calculate(a, operator, btnId) {
//   const b = Number(calDisplay.innerText);

//   if (b != 0) {
//     switch (operator) {
//       case "add": ans = a + b; break;
//       case "minus": ans = a - b; break;
//       case "multiply": ans = a * b; break;
//       case "divide": ans = a / b; break;
//     }
//   } else if (b == 0 && operator === 'divide') {
//     ans = 'Err';
//   }
//   numArr = [String(ans)];
//   calDisplay.innerText = String(ans);

//   if (btnId !== 'equal' && btnId !== 'clearInput') {
//     console.log('getting into the inner loop of calculate');
//     console.log(`operator: ${operator}`);
//     console.log(`btnId: ${btnId}`);
//     console.log(`going to convert operator ${operator} to be ${btnId}`);
//   };
//   tempNum = '';
// }

// function clear() {
//   if (tempNum != '') {
//     tempNum = '';
//   } else {
//     numArr.pop();
//     operator = '';
//   }

//   calDisplay.innerText = '';
// }

// ---------------------------------------------------------------------------------


'use strict';

let tempNum = '';
let ans = 0;
let numArr = [];
let operator = '';
let numMap = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "zero": 0, "dot": '.', "negative": -1 };
let operatorsList = ["add", "minus", "multiply", "divide", "equal"];

const calDisplay = document.querySelector("#ansDisplay");
const btnList = document.querySelectorAll(".btn");

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", calculator)
};

function calculator() {
  console.log(`(${this.id})`);
  if (this.id in numMap) {
    updateCalDisplay(this.id);

  } else if (this.id === "clearInput") {
    clear();

  } else if (operatorsList.includes(this.id)) {
    if (numArr.length === 1 && tempNum != '') {
      calculate(Number(numArr[0]), operator, this.id);
      if (this.id !== 'equal') operator = this.id;

    } else {
      updateOperator(this.id);
    };
  }

  console.log(`After processing: tempNum= ${tempNum}, numArr= String[${numArr}], operator= ${operator}`);
}

function updateCalDisplay(btnId) {
  if (tempNum[tempNum.length - 1] === '.' && btnId === "dot") {
    return;
  } else if (btnId === 'negative' && tempNum === '' && numArr.length === 1) {
    // Handle clicking 'negative' after clicking 'equal', where tempNum is empty now, and numArr has a length of 1
    let lastAns = numArr[0];
    if (lastAns[0] === '-') {
      const revertNewNum = lastAns.slice(1, lastAns.length);
      tempNum = revertNewNum;
    } else {
      tempNum = '-' + numArr[0];
    }
    numArr.pop();

  } else if (btnId === "negative" && tempNum[0] != '-') {
    // Handle clicking 'negative' after inputting some numbers and is storing in tempNum
    console.log(`Turning number to be negative`);
    tempNum = String("-") + tempNum;
    console.log(tempNum);

  } else if (btnId === "negative" && tempNum[0] === '-') {
    // Handle clicking 'negative' on an tempNum with prefix = '-' to revert the tempNum from negative value to positive value
    console.log(`Revering the negative`);
    const revertNewNum = tempNum.slice(1, tempNum.length);
    tempNum = revertNewNum;
    console.log(tempNum);


  } else if (btnId !== "negative") {
    tempNum += numMap[btnId];
  };
  calDisplay.innerText = tempNum;
}

function updateOperator(btnId) {
  if (btnId !== 'equal' && btnId !== 'clearInput') {
    console.log(`Updating operator from ${operator} to ${btnId}`);
    operator = btnId;
  }
  if (tempNum != '') {
    numArr.push(Number(calDisplay.innerText));
  }
  calDisplay.innerText = '';
  tempNum = '';

}

function calculate(a, operator, btnId) {
  const b = Number(calDisplay.innerText);

  if (b != 0) {
    switch (operator) {
      case "add": ans = a + b; break;
      case "minus": ans = a - b; break;
      case "multiply": ans = a * b; break;
      case "divide": ans = a / b; break;
    }
  } else if (b == 0 && operator === 'divide') {
    ans = 'Err';
  }
  numArr = [String(ans)];
  calDisplay.innerText = String(ans);

  if (btnId !== 'equal' && btnId !== 'clearInput') {
    console.log('getting into the inner loop of calculate');
    console.log(`operator: ${operator}`);
    console.log(`btnId: ${btnId}`);
    console.log(`going to convert operator ${operator} to be ${btnId}`);
  };
  tempNum = '';
}

function clear() {
  if (tempNum != '') {
    tempNum = '';
  } else {
    numArr.pop();
    operator = '';
  }

  calDisplay.innerText = '';
}