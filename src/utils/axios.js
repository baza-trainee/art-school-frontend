import axios from 'axios';

const instance = axios.create({
  //baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: 'https://verykivsky-art-school2.com.ua/api/v1/',
});

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
