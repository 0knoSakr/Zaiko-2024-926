// client/src/services/api.js
import axios from 'axios';

// Axiosのインスタンスを作成
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // APIサーバーのベースURL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
