// will come back to this

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

  // --- On load, apply stored theme ---
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark-mode");
    checkbox.checked = true;
    switchLabel.innerHTML = ":)";
  } else {
    body.classList.remove("dark-mode");
    checkbox.checked = false;
    switchLabel.innerHTML = ":(";
  }

  // --- Toggle function ---
  window.toggleDarkMode = function() {
    body.classList.toggle("dark-mode");

    if (checkbox.checked) {
      switchLabel.innerHTML = ":(";
      localStorage.setItem("theme", "dark");
    } else {
      switchLabel.innerHTML = ":)";
      localStorage.setItem("theme", "light");
    }
  };
});




