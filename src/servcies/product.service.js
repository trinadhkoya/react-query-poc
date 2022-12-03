import { client } from ".client";

async function getSingle(id) {
  const data = await client.get(`${id}`);
  return data;
}
async function getAllProducts() {
  const data = await client.get("products");
  return data;
}
export { getSingle, getAllProducts };
