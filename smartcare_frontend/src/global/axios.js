import axios from "axios";

const token = localStorage.getItem('token')

export default axios.create({
  baseURL: "http://localhost:6969/api/",
  headers: {
    Authorization: `Bearer ${token}`
  } 
});
