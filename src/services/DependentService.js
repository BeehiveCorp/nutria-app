import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './ApiService';

class DependentService {
  // static getAllByUserId = async ({ userId, dependentId }) => {
  //   try {
  //     const query = userId ? `userId=${userId}` : `dependentId=${dependentId}`;

  //     const { data } = await api.get(`/exams/all?${query}`);

  //     return { data };
  //   } catch (error) {
  //     const { message } = error.response.data.error;
  //     return { error: message };
  //   }
  // };

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
