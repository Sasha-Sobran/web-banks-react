import axios from "axios";

const http = axios.create({ baseURL: "http://127.0.0.1:5000/" });

export default async function getWaifus() {
  const response = await http.get("waifus");
  return response.data;
}

export async function getAges() {
  const response = await http.get("ages");
  return response.data;
}

export async function getPrices() {
  const response = await http.get("prices");
  return response.data;
}

export async function getWaifu(id) {
  const response = await http.get(`waifus/${id}`);
  return response.data;
}

export async function getFilteredByPrice(price) {
  const response = await http.get(`waifus/price_filter?price=${price}`);
  return response.data;
}

export async function getFilteredByAge(age) {
  const response = await http.get(`waifus/age_filter?age=${age}`);
  return response.data;
}

export async function getSortedByName() {
  const response = await http.get("waifus/name_sort");
  return response.data;
}

export async function getSortedByAge() {
  const response = await http.get("waifus/age_sort");
  return response.data;
}

export async function getSortedByPrice() {
  const response = await http.get("waifus/price_sort");
  return response.data;
}

export async function searchWaifus(query) {
  const response = await http.get(`waifus/search?query=${query}`);
  return response.data;
}
