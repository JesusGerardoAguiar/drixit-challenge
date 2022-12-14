import axios from "axios";

export const login = (loginData: { email: string; password: string }) =>
  axios.post(`/api/authenticate`, loginData);

export const getUserInfo = (token: string) =>
  axios.get(`/api/user`, { headers: {"Authentication": `Bearer ${token}`} });

  export const logOut = () =>{ 
    localStorage.removeItem("jwttoken");
  }