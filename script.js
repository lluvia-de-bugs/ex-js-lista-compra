let items = ["Orange", "Apple", "Banana"];
const shopListDOM = document.getElementById("listId");
function printList() {
  shopListDOM.innerHTML = "";
  for (let item of items) {
    shopListDOM.innerHTML += `<li><label><input type="checkbox"/> ${items[index]} </label><span onclick="deleteItemFromList('${items}')" class="item-delete-btn">x</span> </li>`;
  }
}

// Función para eliminar un item de la lista
function deleteItemFromList(item) {
  const indexToDelete = items.indexOf(item);
  items.splice(indexToDelete, 1);
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
  console.log(items);
}
// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}
// Llamada a la función principal
main();
