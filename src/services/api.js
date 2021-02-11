import axios from 'axios';

const api = axios.create({
  baseURL: 'http://shishapedia.pagekite.me',
});

export default api;
