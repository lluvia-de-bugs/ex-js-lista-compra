let items = ["Orange", "Apple", "Banana"];
const shopListDOM = document.getElementById("listId");
function printList() {
  shopListDOM.innerHTML = "";
  for (let item of items) {
    shopListDOM.innerHTML += `<li>${item} <span class="item-delete-btn">x</span> </li>`;
  }
}
// Función para eliminar un item de la lista
function deleteItemFromList(item) {}
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
  console.log(newItem.trim());
  //Guard
  if (!newItem) {
    alert("debes introducir algo");
    return;
  }
  if (newItem.length >= 25) {
    alert("Mucho Texto")
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

















