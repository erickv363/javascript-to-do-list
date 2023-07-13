// 1. Add multiple items to my list
// 2. Remove or cross off items once they are done

let toDoListArray = []
let input = document.getElementById("input")
let display = document.getElementById("display")

// 2. create funaction to display all items on screen / DOM
function displayAllItems() {
    display.innerHTML = toDoListArray

  // loop over the array and display each item in the DOM
}

function addItem() {
  // 1. add one item into the todoListArray
  toDoListArray.push(input.value)
  input.value // we dont need this
  console.log(toDoListArray)
  console.log(input.value)

  // calling displayAllItems so that it shows the new items on the DOM
  displayAllItems()
}

// 3. create function to delete one item

// 4. create function to delete all items
