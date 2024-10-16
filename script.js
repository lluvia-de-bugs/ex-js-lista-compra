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
    shopListDOM.innerHTML += `<li><label><input type="checkbox"/> ${item.name} </label><span onclick="deleteItemFromList('${items}')" class="item-delete-btn">x</span> </li>`;
  }

  //if isBought: true --> ...
}

// Función para eliminar un item de la lista
function deleteItemFromList(item) {
  items = items.filter((item) => item.indexOf !== idToR);
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
  const newItem = inputDOM.value.trim();
  inputDOM.value = "";
  //Guard

  for (const item of items) {
    if (item.toLowerCase() == newItem.toLowerCase()) {
      alert("El producto ya está en la lista");
      return;
    }
  }

  if (!newItem) {
    alert("debes introducir algo");
    return;
  }
  if (newItem.length >= 25) {
    alert("Mucho Texto");
    return;
  }
  items.push(capitalizerFirst(newItem));
  printList();
}
// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}
// Llamada a la función principal
main();
