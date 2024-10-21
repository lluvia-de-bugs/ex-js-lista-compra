const BASE_API = "https://6710ec08a85f4164ef2ff611.mockapi.io/api/apiLista";

export async function fecthDataFromAPI() {
  const response = await fetch(BASE_API + "/items");
  return await response.json();
}
