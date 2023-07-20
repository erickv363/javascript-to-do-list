let toDoListArray = []
let input = document.getElementById("input")
let display = document.getElementById("display")

// 2. create funaction to display all items on screen / DOM
function displayAllItems() {
  // allow for input field to be empty with "", instead of showing the array item entered
  display.innerHTML = ""

  // loop over the array and display each item in the DOM
  for (let i = 0; i < toDoListArray.length; i++) {
    console.log(toDoListArray[i])
    // insert each html item into the DOM
    // creating a div element inside the DOM for each item in the array
    const element = document.createElement("div")
    // adding each array item into the DOM div after the 'for loop' has run
    element.innerHTML = toDoListArray[i]
    // wrapping each array item after the 'for loop' in a <p> and giving it onclick calling the deleteItem function, passing though i after the for loop.
    element.innerHTML = `<p onclick="deleteItem(${i})">${toDoListArray[i]}</p>`

    display.appendChild(element)
  }
}

// function to enter items in the array by hitting the 'enter' key from keyboard with using 'submit' button
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    document.getElementById("submit").click() // how can i get rid of this button and still use this function?
  }
})

function addItem() {
  // 1. add one item into the todoListArray
  toDoListArray.push(input.value)
  // using "" so the input clears after the item has been logged into displayAllItems/display
  input.value = ""

  // calling displayAllItems so that it shows the new items on the DOM
  displayAllItems()
}

// 3. create function to delete one item
function deleteItem(index) {
  // using splice method to remove any item from the array, passing index (from for loop) for position and 1 for how many to delete
  toDoListArray.splice(index, 1)
  // calling displayAllItems so it shows updated list in the DOM
  displayAllItems()
}

// 4. create function to delete all items
function clearAllItems() {
  toDoListArray = []
  display.innerHTML = toDoListArray
}

//function to change mouse to pointer when hovering over list items
function mouseOver() {
  document.getElementById("display").style.cursor = "pointer"
}
