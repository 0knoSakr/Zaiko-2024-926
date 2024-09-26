import React, { useState, useEffect } from 'react';
import api from '../services/api'; // api.jsをインポート

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // api.jsを通じてAPIリクエストを送る
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('商品情報の取得に失敗しました:', error));
  }, []);

  return (
    <div>
      <h2>商品リスト</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - 在庫: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
