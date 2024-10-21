const BASE_API = "https://6710ec08a85f4164ef2ff611.mockapi.io/api/apiLista";

export async function fecthDataFromAPI() {
  const response = await fetch(BASE_API + "/items");
  return await response.json();
}

export async function postItemToApi(item) {
  const response = await fetch(BASE_API + "/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  console.log(newItem);
  console.log(await response.json());
}
