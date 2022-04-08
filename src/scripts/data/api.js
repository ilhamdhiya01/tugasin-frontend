import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://127.0.0.1:3333/api/v1',
  baseURL: 'https://tugasin.herokuapp.com/api/v1',
  withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // }
});

export default apiClient;
