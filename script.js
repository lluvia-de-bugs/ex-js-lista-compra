//let items = ["Orange", "Apple", "Banana"];

let items = [
  {
    name: "Orange",
    isBought: false,
  },
  {
    name: "Apple",
    isBought: false,
  },
  {
    name: "Banana",
    isBought: true,
  },
];

console.log(items);

const shopListDOM = document.getElementById("listId");
function printList() {
  shopListDOM.innerHTML = "";
  for (let item of items) {
    shopListDOM.innerHTML += `<li><label}><input onChange="checkedItem(index)" type="checkbox" ${
      item.isBought ? "checked" : ""
    }/> ${
      item.name
    } </label><span onclick="deleteItemFromList('${items}')" class="item-delete-btn">x</span> </li>`;
  }
}

/*function checkedItem(index) {
  const liDOM = document.querySelectorAll("li")[index];
  const textSpanDOM = liDOM.querySelector(span.textSpan);
  if (!items[index].isBought) {
    textSpanDOM.style.textDecoration = "line-through";
  } else {
    items[index].isBought = false;
    textSpanDOM.removeAttribute("style");
  }
}*/

// Función para eliminar un item de la lista
function deleteItemFromList(item) {
  items.splice(index, 1);
  printList();
}

function capitalizerFirst(text) {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest.toLowerCase();
}
// Función para agregar un item a la lista
function addItemToList() {
  const inputDOM = document.getElementById("inputId");
  const newItemName = inputDOM.value.trim();
  inputDOM.value = "";
  console.log(newItemName);

  //Guard
  if (!newItemName) {
    alert("debes introducir algo");
    return;
  }

  if (newItemName.length >= 25) {
    alert("Mucho Texto");
    return;
  }

  for (const item of items) {
    if (item.name.toLowerCase() == newItemName.toLowerCase()) {
      alert("El producto ya está en la lista");
      return;
    }
  }

  const newItem = {
    name: capitalizerFirst(newItemName),
    isBought: false,
  };

  items.push(newItem);
  printList();
  console.log(items);
}
// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}
// Llamada a la función principal
main();
