import axios from "axios";

const BASE_URL = "http://159.223.28.5:5000/api";
const TOKEN = JSON.parse;
JSON.parse(localStorage.getItem("persist:root"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
