import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.shishapedia.com.br',
});

export default api;
