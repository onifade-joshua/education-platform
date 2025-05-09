import axios from '@/axios';

export default {
  async getProfile() {
    return await axios.get('/user/profile'); 
  }
};
