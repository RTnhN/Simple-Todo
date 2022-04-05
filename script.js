const button = document.querySelector('#button');
const list = document.querySelector("ul");
let textBox = document.querySelector("input");
let taskID = "";
let items = document.querySelectorAll("li");
let itemsArray = [];
let itemsNameArray = [];
document.addEventListener("keypress", checkForEnter);
button.addEventListener("click", addItem);

if (window.localStorage.TodoItems !== undefined) {
  itemsNameArray = JSON.parse(window.localStorage.TodoItems);
  itemsNameArray.forEach(addItemFromLocalStorage);
}
function checkForEnter(e) {
  if (e.key === "Enter"){
    e.preventDefault()
    addItem();
    textBox.focus()
  }
}

function addItem() {
  textBox = document.querySelector("input")
  if (textBox.value ===""){
    return;
  }
  list.appendChild(document.createElement("li"));
  list.lastChild.textContent = textBox.value;
  list.lastChild.setAttribute("contenteditable", "true");
  list.lastChild.addEventListener("focusout", saveToLocalStorage);
  saveToLocalStorage();
  textBox.value = "";
}

function addItemFromLocalStorage(taskName) {
  list.appendChild(document.createElement("li"));
  list.lastChild.textContent = taskName;
  list.lastChild.setAttribute("contenteditable", "true");
  list.lastChild.addEventListener("focusout", saveToLocalStorage);
  saveToLocalStorage();
}

// function popItem(e) {;
//   e.currentTarget.remove();
//   saveToLocalStorage();
// };

function saveToLocalStorage(){
  items = document.querySelectorAll("li");
  itemsArray = Array.from(items);
  itemsNameArray = itemsArray.map(item => item.textContent);
  window.localStorage.setItem("TodoItems", JSON.stringify(itemsNameArray));
}




