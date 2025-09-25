// need to store an array of classes in localstorage that contains the ID and name of each notepad list.
// After that, I need to be able to pull that array and create li's with the matching ID
// I need to be able to then delete that li using that ID and delete it from local storage by searching that ID.
// I may need to start somewhat fresh with this and use a local array until I figure it out and store it in localstorage


let notepadListFromLocalStorage = JSON.parse(localStorage.getItem("notepads")) || []; // gets list from storage
const notepadUL = document.getElementById("notepad-list"); // gets UL

// notepad object
class Notepad {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// notepad menu toggle
function toggleNotepadMenu(overlayId, menuId) {
  const overlay = document.getElementById(overlayId);
  const menu = document.getElementById(menuId);

  overlay.classList.toggle("show");
  menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(notepadListFromLocalStorage.length);
  if (notepadListFromLocalStorage.length != 0) {
    // loops through each stored object and adds to the DOM
    notepadListFromLocalStorage.forEach(notepad => {
      const id = notepad.id;
      const name = notepad.name;
      renderNotepad(id, name);
    });
  } else {
    renderNotepad(404, "You currently have no notes");
  }
  
});

// adds an notepad object to the dom w/ ID
function renderNotepad(id, name) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const placeholder = document.querySelector(`[data-id="404"]`);
  if (id != 404) {
    if (placeholder != null) {
      placeholder.remove();
    }
    
    li.dataset.id = id;
    span.textContent = name;
    const button = document.createElement("button");
    button.className = "notepad-delete-btn";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-circle-xmark"; // icon only
    li.append(span);
    li.append(button);
    button.append(icon);
  } else {
    li.append(span);
    li.dataset.id = id;
    span.textContent = name;
  }
  
  
  notepadUL.append(li);
}


// New Notepad form
const newNotepadForm = document.getElementById("new-notepad-form");

newNotepadForm.onsubmit = (event) => {
  event.preventDefault();

  // get form value
  const newNotepadID = Date.now(); // stores current date in ms in variable
  const newNotepadName = document.getElementById("notepad-name").value; // stores new notepad name in variable
  const newNotepad = new Notepad(newNotepadID, newNotepadName); // creates new notepad object and stores in variable
  let storedNotepadList = notepadListFromLocalStorage;
  // console.log(`ID: ${newNotepad.id}  Name: ${newNotepad.name}`);
  
  storedNotepadList.push(newNotepad); //push adds to array
  // console.log(`Stored list:`, storedNotepadList);
  renderNotepad(newNotepadID, newNotepadName);
  localStorage.setItem("notepads", JSON.stringify(storedNotepadList));
  notepadListFromLocalStorage = notepadListFromLocalStorage = JSON.parse(localStorage.getItem("notepads")) || []; // resets the variable
  toggleNotepadMenu("new-notepad-overlay", "new-notepad-menu");
}


// delete notepad
let domLi;
let notepadID;

notepadUL.addEventListener("click", (event) => {
  const button = event.target.closest(".notepad-delete-btn");
  if (!button) return; // if not matching element is found results in null thus false and exits the function
  const li = button.closest("li"); // gets parent li
  const id = li.dataset.id; // gets parent li's id
  domLi = li;
  notepadID = id;
  toggleNotepadMenu('delete-notepad-overlay', 'delete-notepad-menu');
});

const deleteNotepadForm = document.getElementById("delete-notepad-form");

deleteNotepadForm.onsubmit = (event) => {
  event.preventDefault();
  domLi.remove();
  deleteNotepad(notepadID);
  toggleNotepadMenu('delete-notepad-overlay', 'delete-notepad-menu');
};

function deleteNotepad(id) {
  const updatedNotepads = notepadListFromLocalStorage.filter(notepad => notepad.id != id); // removes all objects that dont have a matching ID from the variable
  localStorage.setItem("notepads", JSON.stringify(updatedNotepads));
  notepadListFromLocalStorage = notepadListFromLocalStorage = JSON.parse(localStorage.getItem("notepads")) || []; // resets the variable
  if (notepadListFromLocalStorage.length == 0) {
    renderNotepad(404, "You currently have no notes");
  }
};


