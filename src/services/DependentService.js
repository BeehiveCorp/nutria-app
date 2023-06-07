import api from './ApiService';

class DependentService {
  static getAllByUserId = async ({ id }) => {
    try {
      const { data } = await api.get(`/dependents/all?userId=${id}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static create = async ({ payload }) => {
    try {
      const { data } = await api.post(`/dependents/insert`, payload);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };
}

export default DependentService;
