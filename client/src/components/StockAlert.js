import React, { useEffect, useState } from 'react';
import api from '../services/api'; // APIサービスをインポート

const StockAlert = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    // 在庫が少ない商品を取得する
    const fetchLowStockProducts = async () => {
      try {
        const response = await api.get('/products/low-stock');
        setLowStockProducts(response.data);
      } catch (error) {
        console.error('在庫アラートの取得に失敗しました:', error);
      }
    };

    fetchLowStockProducts(); // コンポーネントがマウントされたときに呼び出す
  }, []);

  return (
    <div>
      <h2>在庫アラート</h2>
      {lowStockProducts.length > 0 ? (
        <ul>
          {lowStockProducts.map((product) => (
            <li key={product.id}>
              {product.name} - 在庫: {product.stock}個
            </li>
          ))}
        </ul>
      ) : (
        <p>現在、在庫が少ない商品はありません。</p>
      )}
    </div>
  );
};

export default StockAlert;
