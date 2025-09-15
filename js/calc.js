// Calculator variables

let firstValue = 0;
let secondValue = 0;
let operation = null;
let usingHistory = false;
let calculation = 0;
let display = "0";


// Calculator Functions
function addToCalc(num) {
  if (display == "0") {
    // calculation = num;
    display = String(num)
  } else {
    // calculation += num;
    display += String(num)
  };
  document.getElementById('main-display').textContent = display;
  console.log(display);
  // console.log(calculation);
  // let updateNum = null;
  // if (operation == null && usingHistory == false) {
  //     // add to first number
  //   if (firstValue == 0) {
  //     updateNum = `${num}`;
  //     firstValue = updateNum;
  //     existingNum.textContent = updateNum;
  //   } else {
  //     updateNum = `${firstValue}${num}`;
  //     firstValue = updateNum;
  //     existingNum.textContent = updateNum;
  //   }
  // } else {
  //   if (secondValue == 0) {
  //     updateNum = `${num}`;
  //     secondValue = updateNum;
  //     existingNum.textContent += updateNum;
  //   } else {
  //     updateNum = `${secondValue}${num}`;
  //     secondValue = updateNum;
  //     existingNum.textContent = updateNum;
  //   }
  // }
  
  
  // console.log(`
  //   updateNum: ${updateNum}
  //   num1:  ${firstValue}
  //   num2: ${secondValue}
  //   OP:  ${operation}
  // `);  
};

function clearCalc() {
  display = "0";
  usingHistory = false;
  document.getElementById('main-display').textContent = display;
  // console.log(`
  //   num1:  ${firstValue}
  //   num2: ${secondValue}
  //   OP:  ${operation}  
  // `);
  console.log("Calculator cleared");
};

// function operator(op) {
//   const display = document.getElementById('main-display');
//   if (secondValue == 0) {
//     if (op == "/") {
//       display.textContent += `÷`;
//     } else {
//       display.textContent += `${op}`;
//     };
//   } else {
//     operatorCalc()
//     if (op == "/") {
//       display.textContent += `÷`;
//     } else {
//       display.textContent += `${op}`;
//     };
//   };
  
//   operation = op;
//   console.log(`
//     num1:  ${firstValue}
//     num2: ${secondValue}
//     OP:  ${operation}   
//   `);
// }

// function operatorCalc() {
//   console.log("operatorCalc");


//   if (operation == "+") {
//     sum = Number(firstValue) + Number(secondValue);
//     operatorOutput(sum);
    
//   } else if (operation == "x") {
//     sum =  Number(firstValue) * Number(secondValue);
//     operatorOutput(sum);

//   } else if (operation == "/") {
//     sum =  Number(firstValue) / Number(secondValue);
//     operatorOutput(sum);

//   } else if (operation == "-") {
//     sum =  Number(firstValue) - Number(secondValue);
//     operatorOutput(sum);
    
//   } else if (operation == null) {
//     console.log("OP == null");

//   } else {
//     console.log("001 An error has occured");
//   };
  
//   // equalsOutput(sum)

//   console.log(`
//     num1:  ${firstValue}
//     num2: ${secondValue}
//     OP:  ${operation}
//   `);
// }

// function operatorOutput(newValue) {
//   // document.getElementById('main-display').textContent = sum;
//   storedValue = newValue;
//   firstValue = newValue;
//   secondValue = 0;
// }

function equalsCalc() {
  console.log("equals");

  sum = Number(display);
  console.log(sum);
  // if (operation == "+") {
  //   sum = Number(firstValue) + Number(secondValue);
  //   equalsOutput(sum);
    
  // } else if (operation == "x") {
  //   sum =  Number(firstValue) * Number(secondValue);
  //   equalsOutput(sum);

  // } else if (operation == "/") {
  //   sum =  Number(firstValue) / Number(secondValue);
  //   equalsOutput(sum);

  // } else if (operation == "-") {
  //   sum =  Number(firstValue) - Number(secondValue);
  //   equalsOutput(sum);
    
  // } else if (operation == null) {
  //   console.log("OP == null");

  // } else {
  //   console.log("001 An error has occured");
  // };
  
  // equalsOutput(sum)

  // console.log(`
  //   num1:  ${firstValue}
  //   num2: ${secondValue}
  //   OP:  ${operation}
  // `);
}

function equalsOutput(newValue) {
  document.getElementById('main-display').textContent = sum;
  storedValue = newValue;
  firstValue = newValue;
  secondValue = 0;
}

function plusMinus() {
  const existingNum = document.getElementById('main-display');
  if (operation == null) {
    if (firstValue > 0 || firstValue < 0) {
      firstValue = firstValue * -1
      document.getElementById('main-display').textContent = firstValue;
    }    
  } else if (operation != null) {
    if (secondValue > 0 || secondValue < 0) {
      secondValue = secondValue * -1
      document.getElementById('main-display').textContent = secondValue;
    }    
    // updateNum = `${num}`;
    //   secondValue = updateNum;
    //   existingNum.textContent += updateNum;
  }
}