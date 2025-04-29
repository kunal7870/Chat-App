import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat-app-backend.onrender.com/api",
  withCredentials: true, // Include credentials in requests
});

export default instance;
