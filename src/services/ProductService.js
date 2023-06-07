import api from './ApiService';

class ProductService {
  static getAll = async ({ missingNutrientIds }) => {
    try {
      const { data } = await api.post('/products/all', { missingNutrientIds });

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };

  static getAllByStore = async ({ id }) => {
    try {
      const { data } = await api.get(`/products/store?id=${id}`);

      return { data };
    } catch (error) {
      const { message } = error.response.data.error;
      return { error: message };
    }
  };
}

export default ProductService;
