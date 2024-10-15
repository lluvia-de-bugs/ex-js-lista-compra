let items = ["Orange", "Apple", "Banana"];
const shopListDOM = document.getElementById("listId");
function printList() {

  shopListDOM.innerHTML = "";

  for (let item of items) {
    shopListDOM.innerHTML += `<li>${item} <span class="item-delete-btn">x</span> </li>`;
  }
}

// Función para eliminar un item de la lista


// Función para agregar un item a la lista
function addItemToList() {
  //seleccionamos el imput
  shopListDOM.innerHTML = "";
  const inputDOM = document.getElementById("inputId");

  items.push(inputDOM.text);
  console.log(items);
  //añadir a la lista ??? el valor de imput

  //actualizar la lista en el DOM
  printList();
}

// Función principal - Aquí empieza la aplicación
function main() {
  printList();
  addItemToList();
}

// Llamada a la función principal
main();
