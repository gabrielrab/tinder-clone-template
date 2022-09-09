import axios from "axios";

const token = window.localStorage.getItem("token");

const api = axios.create({
  // baseURL: "https://05dc-147-182-143-140.ngrok.io/api/v1",
  baseURL: "http://147.182.143.140:4444/api/v1",
  // baseURL: ''
  headers:
    token && token !== null
      ? { Authorization: `Bearer ${window.localStorage.getItem("token")}` }
      : {},
});

export default api;
