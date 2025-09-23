// will come back to this

// Navbar Functions
function toggleDropdown(menuId, arrowId) {
  const menu = document.getElementById(menuId);
  const arrow = document.getElementById(arrowId);

  menu.classList.toggle("show");
  arrow.classList.toggle("down");
};

function toggleSettings(overlayId, arrowId, menuId) {
  const overlay = document.getElementById(overlayId);
  const arrow = document.getElementById(arrowId);
  const menu = document.getElementById(menuId);

  overlay.classList.toggle("show");
  menu.classList.toggle("show");
  arrow.classList.toggle("down");
}

// Settings form
const settingsForm = document.getElementById("settings-form");

settingsForm.onsubmit = (event) => {
  // event.preventDefault(); // stop the page from reloading

  // get form values
  const darkModeEnabled = document.getElementById("darkmode").checked;
  const testEnabled = document.getElementById("test").checked;

  // save to local storage
  localStorage.setItem("darkmode" , darkModeEnabled);
  localStorage.setItem("test" , testEnabled);
}

document.addEventListener("DOMContentLoaded", () => {

  // when the dom is loaded, apply the stored dark/light theme from local storage
  const darkEnabled = localStorage.getItem("darkmode");
  const testEnabled = localStorage.getItem("test");

  if (darkEnabled == "true") {
    document.body.classList.add("darkmode")
    document.getElementById("darkmode").checked = true;
  } else {
    document.body.classList.remove("darkmode")
  }

  if (testEnabled == "true") {
    document.body.classList.add("test")
    document.getElementById("test").checked = true;
  } // add else field for an actal non test function
  
});





