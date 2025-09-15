// Armstrong checker
document.getElementById("num").addEventListener("keydown", (event) => {
  isArmstrong(event, document.getElementById("num"))
});

function toggleTool(toolID) {
const tool = document.getElementById(toolID)

tool.classList.add("show");
}

function displayNumberChecker() {
  const numberChecker = document.getElementById("numberChecker");
  const numberGenerator = document.getElementById("numberGenerator");
  
  numberChecker.classList.add("show");
  numberGenerator.classList.remove("show");
}

function displayNumberGenerator() {
  const numberChecker = document.getElementById("numberChecker");
  const numberGenerator = document.getElementById("numberGenerator");
  
  numberChecker.classList.remove("show");
  numberGenerator.classList.add("show");
}

function isArmstrong(event, num) {
  if (event.key === "Enter" && num.value.length != 0) {
    event.preventDefault();
    console.log("Enter event detected in the input field");

    const startingNumber = num.value;
    let splitNumbers = startingNumber.split("");
    let cubedTotal = 0;
    let digitCount = splitNumbers.length;
    let cubedNumbers = splitNumbers.map(char => {
      digit = Number(char);
      return Math.pow(digit, digitCount);
    });

    cubedNumbers.forEach(cubedNumber => {
      cubedTotal += cubedNumber;
    });

    if (cubedTotal == startingNumber) {
      document.getElementById("sum").innerHTML = `${startingNumber} is an armstrong number!!`;
    } else {
      document.getElementById("sum").innerHTML = `${startingNumber} is NOT an armstrong number...`;
    };
    console.log("Armstrong checker succeeded");
  } else if (event.key === "Enter" && num.value.length == 0){
    event.preventDefault();
    document.getElementById("sum").innerHTML = `You must enter a number in the input field...`;
    console.log("Enter event detected in the input field but the input field was empty");
  }
}

// armstrong generator
function generateArmstrongList() {
const numStart = Number(document.getElementById("num1").value);
const numEnd = Number(document.getElementById("num2").value);
const list = document.getElementById("generatorList");
list.innerHTML = "";
  if (numStart < numEnd && numEnd - numStart < 10000001) {
    for (let i = numStart; i < numEnd; i++) {
    const inum = i;
    let splitNumbers = inum.toString().split("");
    let cubedTotal = 0;
    let digitCount = splitNumbers.length;
    let cubedNumbers = splitNumbers.map(char => {
      digit = Number(char);
      return Math.pow(digit, digitCount);
    });
    
    cubedNumbers.forEach(cubedNumber => {
      cubedTotal += cubedNumber;
    });
    if (cubedTotal == inum) {
      list.innerHTML += `<li>${inum}</li>`;
    }}
  } else if (numEnd - numStart > 10000001) {
    list.innerHTML += `The range between ${numStart} and ${numEnd} is too large :( please pick a range within 10000000)...`;
  } else if (numStart > numEnd) {
    list.innerHTML += `${numStart} is bigger than ${numEnd}, please ensure the starting number is smaller than the ending number...`;
  } else {
    list.innerHTML = "Please enter a number in both boxes above";
  }
  
}



