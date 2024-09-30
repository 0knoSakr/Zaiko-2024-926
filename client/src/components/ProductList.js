import React, { useState, useEffect } from 'react';
import api from '../services/api'; // api.jsをインポート
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState('');
  const [sku, setSku] = useState('');

  //商品をロードする関数
  const LoadProducts = async () => {
    try {
      const result = await fetchProducts(items, sku);
      setProducts(result);
    } catch (error) {
      console.error("商品情報の取得に失敗しました:", error);
    }
  };

  //コンポーネントがマウントされたときとitemsまたはskuが変更されたとき
  //商品をロード
  useEffect(() => {
    LoadProducts();
  }, [items, sku]);

  return (
    <div>
      <h2>商品リスト</h2>
      <input type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button>商品名で検索</button>
      <input type="text"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      />
      <button>SKUで検索</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - 在庫: {product.stock}
            <button><Link to={`/products/${product.id}`}>詳細へ</Link></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
