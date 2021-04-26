import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
  // baseURL: 'https://api.shishapedia.com.br',
});

export default api;
