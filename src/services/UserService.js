import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './ApiService';

class UserService {
  static login = async ({ email, password }) => {
    try {
      const { data } = await api.post('/users/login', {
        email,
        password,
      });

      await AsyncStorage.setItem('@user', JSON.stringify(data));
      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static checkUserExistence = async ({ email }) => {
    try {
      const { data } = await api.get(`/users/checkUserExistence?email=${email}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static create = async ({ payload }) => {
    try {
      await api.post('/users/create', payload);

      const { data } = await this.checkUserExistence({ email: payload.email });

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };
}

export default UserService;
