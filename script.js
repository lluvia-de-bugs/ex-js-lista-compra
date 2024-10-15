// Esta lista es la que de debe mostrar en el navegador
let items = ["Orange", "Apple", "Banana"];

// Función para pintar la lista en el navegador
function printList() {
  // Seleccionar la lista del DOM (listId)
  const shopListDOM = document.getElementById("listId");
  //elimiar lo que haya en la lista del DOM

  // recorre la lista
  for (let item of items) {
    shopListDOM.innerHTML += `<li>${item} <span class="item-delete-btn">x</span> </li>`
    //imprimir cada item de la lista en el DOM (con forma del html) <li> item </li>
  }
}

// Función para eliminar un item de la lista
function deleteItemFromList(item) {}

// Función para agregar un item a la lista
function addItemToList() {}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
}

// Llamada a la función principal
main();
