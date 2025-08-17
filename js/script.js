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

// Calculator Functions
function addToCalc(num) {
  const existingNum = document.getElementById('main-display');
  console.log(existingNum.textContent + " + " + num);
  if (existingNum.textContent === "0") {
    existingNum.textContent = num;
  } else {
    existingNum.textContent += num;
  }
};

function clearCalc() {
  document.getElementById('main-display').textContent = 0;
  console.log("Calculator cleared");
};