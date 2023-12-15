import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
});

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

export async function searchWaifus(query) {
  const response = await http.get(`waifus/search?query=${query}`);
  return response.data;
}

export async function login(email, password) {
  const response = await http.post("login", {
    email: email,
    password: password,
  });

  localStorage.setItem("access_token", response.data["access_token"]);

  return response.data;
}

export async function register(username, email, password) {
  const response = await http.post("register", {
    username: username,
    email: email,
    password: password,
  });
  return response;
}

export async function getUser() {
  const response = await http.get("protected");
  return response.data;
}
