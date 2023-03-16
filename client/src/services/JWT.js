import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://erasmus-project-sq9c.onrender.com/dl/user/";
const navigate = useNavigate

export const register = (email, username, password) => {
  return axios.post(API_URL + "new", {
    username,
    email,
    password,
  })
    .then(res => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data
    })
    .catch(err => { throw new Error(err.message) })
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch(err => { throw new Error(err.message) })
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

