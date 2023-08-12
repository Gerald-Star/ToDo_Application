const btnSave = document.getElementById("btnSave");
const toDoItem = document.getElementById("toDoItem");
const itemsDisplay = document.getElementById("itemsDisplay");

displayItems(getItems());

//create the onclick function to be called when the item is clicked

btnSave.onclick = function () {
  const toDoText = toDoItem.value;
  storeItem(toDoText);
};

//store the onclick function to be called when the item is clicked

// function storeItem(toDoText) {
//   let items = getItems();
//   if (items != undefined && items != "") {
//     items = `${items} , ${item}`;
//   } else {
//     items = item;
//   }

//   saveToDos(items);
// }

// create a new function  saveToDos(items); to save the items to the database (local storage)
//using the lockr.js framework to store the items in local storage

// function saveToDos(items) {
//   Lockr.set("Items", items); //set the lockr.js framework to store the items
//   displayItems(Items);
//   clearEntry(); // clears the entry from the database
// }

//create a function to getItems()

// function getItems() {
//   const todos = Lockr.get("items");
//   return todos;
// }

// //create a new entry function clearEntry() and set the toDoItem value

// function clearEntry() {
//   toDoItem.value = "";
// }

// //create a function to displayItems using array method()split
// function displayItems(Items) {
//   if (items != undefined && items != "") {
//     const itemArray = items.split(",");
//     let out = '<ul class="list">';
//     for (var x = 0; x < itemArray.length; x++) {
//       out +=
//         '<li class="list-item list-item--longdivider"><div class="list-item_center list-item_longdivider-center">';
//       out += "" + itemArray[x] + "</div >";
//       out +=
//         '<div class="list-item_right" onclick=deleteItem(' +
//         x +
//         ');"><i class="zmdi zmdi-delete"></i></div></li>';
//     }
//     out += "</ul >";
//     itemsDisplay.innerHTML = out;
//   }
// }
