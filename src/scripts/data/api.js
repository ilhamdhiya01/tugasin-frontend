import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://localhost:3333/api/v1',
  baseURL: 'https://691873a1e846.ap.ngrok.io/api/v1',
  withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // }
});

export default apiClient;
