import axios from '@/axios';

export default {
  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @param {string} userData.username - Username for registration
   * @param {string} userData.email - Email for registration
   * @param {string} userData.password - Password for registration
   * @returns {Promise} - API response
   */
  async register(userData) {
    try {
      const response = await axios.post('/auth/register', userData);
      
      // If registration is successful and returns a token, store it
      if (response.data?.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('isAuthenticated', 'true');
      }
      
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }
};