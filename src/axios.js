import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fscllms-chcfegdjhtgsa5et.ukwest-01.azurewebsites.net/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
