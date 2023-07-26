let toDoListArray = []
let input = document.getElementById("input")
let display = document.getElementById("display")

// 2. create funaction to display all items on screen / DOM
function displayAllItems() {
  // allow for input field to be empty with "", instead of showing the array item entered
  display.innerHTML = ""
  let arrayItems = JSON.parse(localStorage.getItem('items'))
  
  console.log(toDoListArray)
  if (arrayItems) {
    toDoListArray = arrayItems
  }


  // loop over the array and display each item in the DOM
  for (let i = 0; i < toDoListArray.length; i++) {
    // console.log(toDoListArray[i])
    // insert each html item into the DOM
    // creating a div element inside the DOM for each item in the array
    const element = document.createElement("div")
    // adding each array item into the DOM div after the 'for loop' has run
    element.innerHTML = toDoListArray[i]
    console.log(toDoListArray[i].todo)
    // wrapping each array item after the 'for loop' in a <span> and giving it onclick calling the deleteItem function, passing through i after the 'for loop'.
    element.innerHTML = `<div><span id="demo" style="cursor:pointer" onclick="deleteItem(${i})">${toDoListArray[i].todo}</span><button onclick="deleteItem()">Delete</button></div>`

    display.appendChild(element)
  }
}
displayAllItems()

function addItem() {
  // 1. add one item into the todoListArray
  // toDoListArray.push(input.value)
  toDoListArray.push({ todo: input.value, isItDone: false })
  console.log(toDoListArray)
  // using "" so the input clears after the item has been logged into displayAllItems/display
  input.value = ""
  localStorage.setItem('items', JSON.stringify(toDoListArray))

  // calling displayAllItems so that it shows the new items on the DOM
  displayAllItems()
}

// function to enter items in the array by hitting the 'enter' key from keyboard with using 'submit' button
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // event.preventDefault()
    addItem()
    // document.getElementById("submit").click() // how can i get rid of this button and still use this function?
  }
})

// 3. create function to delete one item
function deleteItem(index) {
  // using splice method to remove any item from the array, passing index (from for loop) for position and 1 for how many to delete
  toDoListArray.splice(index, 1)
  localStorage.setItem('items', JSON.stringify(toDoListArray))
  // calling displayAllItems so it shows updated list in the DOM
  displayAllItems()
}

// 4. create function to delete all items
function clearAllItems() {
  toDoListArray = []
  display.innerHTML = toDoListArray
  localStorage.clear()
}

// To DO:
// 1. Create function that marks the item as Done (TRUE/FALSE)
//    - reach in to the array, find that single item and update the done property

// 2. Trigger this function when I click on an item
// 3. Apply strike through style if item is DONE
//    - read done property and show style in item
// 4. read me and - update github

/*** BONUS
 * To keep the users TODO items saved
 * 1. LocalStorage === cookies
 */
