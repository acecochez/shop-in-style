const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");

let shoppingList = ["Bread", "Milk", "Eggs"];

button.addEventListener("click", addItemToList);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemToList();
  }
});

function generateList() {
  list.innerHTML = "";

  if (shoppingList.length > 0) {
    shoppingList.forEach((element) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(element));
      li.addEventListener("click", function () {
        removeItemFromList(element);
      });
      list.appendChild(li);
    });
  } else {
    const message = document.createTextNode("Your list is empty!");
    list.appendChild(message);
  }
}

function addItemToList() {
  if (input.value !== "") {
    let item = input.value;
    shoppingList.push(item);
    input.value = "";
    generateList();
  }
}

function removeItemFromList(item) {
  const itemIndex = shoppingList.indexOf(item);
  if (itemIndex !== -1) {
    shoppingList.splice(itemIndex, 1);
    generateList();
  }
}

generateList();
