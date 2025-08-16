function toggleDropdown(menuId, arrowId) {
      const menu = document.getElementById(menuId);
      const arrow = document.getElementById(arrowId);

      menu.classList.toggle("show");
      arrow.classList.toggle("down");
    }

const body = document.body;
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  console.log('Dark mode toggled');
}