import api from './ApiService';

class StoreService {
  static getAll = async () => {
    try {
      const { data } = await api.get('/stores/all');

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static getById = async ({ id }) => {
    try {
      const { data } = await api.get(`/stores/details?id=${id}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };
}

export default StoreService;
