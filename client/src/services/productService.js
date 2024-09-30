// client/src/services/productService.js
import api from './api'; // Axiosインスタンスをインポート

// 商品一覧を取得
export const getProducts = () => {
  return api.get('/products');
};

// 商品をIDで取得
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

// 商品を追加
export const addProduct = (product) => {
  return api.post('/products', product);
};

// 在庫が少ない商品を取得
export const getLowStockProducts = () => {
  return api.get('/products/low-stock');
};

// 商品検索
export const fetchProducts = async (name = '', sku = '') => {
  try {
    const response = await api.get(`/products?name=${name}&sku=${sku}`);
    return response.data;
  } catch (error) {
    console.error('商品取得エラー:', error);
    throw error;
  }
};

export default {
  getProducts,
  getProductById,
  addProduct,
  getLowStockProducts,
  fetchProducts,
};
