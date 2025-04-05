import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:6063/api",

  baseURL: "https://evangadiforumbackend-odcy.onrender.com/api",
});
export default axiosBase;