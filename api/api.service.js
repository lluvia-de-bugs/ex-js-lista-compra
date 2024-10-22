const BASE_API = "https://6710ec08a85f4164ef2ff611.mockapi.io/api/apiLista";
//getAll
export async function fecthDataFromAPI() {
  const response = await fetch(BASE_API + "/items");
  return await response.json();
}

//post
export async function postItemToApi(item) {
  const response = await fetch(BASE_API + "/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

//delete

//put //patch //isBought
