import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

const ApiService = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default ApiService;