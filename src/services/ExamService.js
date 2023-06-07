import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './ApiService';

class ExamService {
  static getAllByUserOrDependentId = async ({ userId, dependentId }) => {
    try {
      const query = userId ? `userId=${userId}` : `dependentId=${dependentId}`;

      const { data } = await api.get(`/exams/all?${query}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static getById = async ({ id }) => {
    try {
      const { data } = await api.get(`/exams/details?id=${id}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };
}

export default ExamService;
