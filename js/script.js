// Document Functions
function toggleDropdown(menuId, arrowId) {
      const menu = document.getElementById(menuId);
      const arrow = document.getElementById(arrowId);

      menu.classList.toggle("show");
      arrow.classList.toggle("down");
    }

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const checkbox = document.getElementById('dark-mode-toggle');
  const switchLabel = document.getElementById('switch-label');

  window.toggleDarkMode = function() {
    body.classList.toggle('dark-mode');

    if (checkbox.checked) {
      document.getElementById('switch-label').innerHTML = ":(";
    } else {
      document.getElementById('switch-label').innerHTML = ":)";
    }
  }
});

// Calculator variables
let firstValue = 0;
let secondValue = 0;
let operation = null;


// Calculator Functions
function addToCalc(num) {
  const existingNum = document.getElementById('main-display');
  let updateNum = null;
  if (operation == null) {
    // add to first number
    if (firstValue == 0) {
      updateNum = `${num}`;
      firstValue = updateNum;
      existingNum.textContent = updateNum;
    } else {
      updateNum = `${firstValue}${num}`;
      firstValue = updateNum;
      existingNum.textContent = updateNum;
    }
  } else {
    if (secondValue == 0) {
      updateNum = `${num}`;
      secondValue = updateNum;
      existingNum.textContent = updateNum;
    } else {
      updateNum = `${secondValue}${num}`;
      secondValue = updateNum;
      existingNum.textContent = updateNum;
    }
  }
  
  
  console.log(`
    updateNum: ${updateNum}
    num1:  ${firstValue}
    num2: ${secondValue}
    OP:  ${operation}
  `);

  // if (operation == null) {
  //   if (existingNum.textContent === "0") {
  //   
  //   storedValue = num;
  //   } else {
  //   existingNum.textContent += num;
  //   storedValue += num;
  //   }
  // } else if (operationValue == 0) {
  //   existingNum.textContent = num;
  //   operationValue = num; 
  // } else {
  //   existingNum.textContent += num;
  //   operationValue += num; 
  // }
  
};

function clearCalc() {
  operation = null;
  firstValue = 0;
  secondValue = 0;
  document.getElementById('main-display').textContent = 0;
  console.log(`
    num1:  ${firstValue}
    num2: ${secondValue}
    OP:  ${operation}  
  `);
  console.log("Calculator cleared");
};

function operator(op) {
  const display = document.getElementById('main-display');
  display.textContent += ` ${op} `;
  operation = op;
  console.log(`
    num1:  ${firstValue}
    num2: ${secondValue}
    OP:  ${operation}   
  `);
}

function equalsCalc() {
  console.log("equals");
  if (operation == "+") {
    console.log(firstValue + "=" + firstValue + "+" + secondValue);
    sum =  Number(firstValue) + Number(secondValue);
    document.getElementById('main-display').textContent = sum;
    storedValue = sum
  }
  console.log(`
    num1:  ${firstValue}
    num2: ${secondValue}
    OP:  ${operation}
    sum: ${sum}
  `);
}