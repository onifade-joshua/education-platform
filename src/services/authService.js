import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fscllms-chcfegdjhtgsa5et.ukwest-01.azurewebsites.net/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async login(email, password) {
    const payload = { email, password };
    const response = await apiClient.post('/auth/login', payload);
    
    if (response.data?.token) {
      localStorage.setItem('authToken', response.data.token);
    }

    return response.data;
  },

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  logout() {
    localStorage.removeItem('authToken');
  }
};
