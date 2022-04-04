const button = document.querySelector('#button')
const list = document.querySelector("ul")
const textBox = document.querySelector("input") 
let taskID = ""
document.addEventListener("keypress", checkForEnter)

if (window.localStorage.length !== 0){
  let numberOfItemsInLocalStorage = window.localStorage.length
  for (let i = 0; i < numberOfItemsInLocalStorage; i++){
    addItemFromLocalStorage(window.localStorage.key(i),window.localStorage.getItem(window.localStorage.key(i)))
  }
}
function  checkForEnter(e){
  if (e.key === "Enter")
    addItem(e)
}

function addItem(){
  textBox = document.querySelector("input") 
  
  list.appendChild(document.createElement("li"))
  list.lastChild.textContent = textBox.value
  list.lastChild.addEventListener("click", popItem)
  taskID = Math.floor(Math.random()*10000)
  list.lastChild.setAttribute("id", taskID)
  window.localStorage.setItem(taskID, textBox.value)
  textBox.value = ""

  }
function popItem(e){
  taskID = e.currentTarget.dataset.id

  window.localStorage.removeItem(taskID)
  e.currentTarget.remove()
  

}

function addItemFromLocalStorage(key, text){
  list.appendChild(document.createElement("li"))
  list.lastChild.textContent = text
  list.lastChild.setAttribute("id", key)
  list.lastChild.addEventListener("click", popItem)
  }

button.addEventListener("click", add)




