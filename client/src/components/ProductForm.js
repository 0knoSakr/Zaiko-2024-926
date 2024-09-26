// client/src/components/ProductForm.js
import React, { useState } from 'react';
import api from '../services/productService'; // APIサービス

const ProductForm = () => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.addProduct({ name, sku, stock });
      alert('商品が追加されました');
    } catch (error) {
      console.error('商品の追加に失敗しました:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>商品名</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>SKU</label>
        <input
          type="text"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
      </div>
      <div>
        <label>在庫</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </div>
      <button type="submit">商品を追加</button>
    </form>
  );
};

export default ProductForm;
