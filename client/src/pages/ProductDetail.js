import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("商品情報の取得に失敗しました", error);
      }
    };
    fetchProduct();
  }, [id]);
  console.log(product)

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>商品詳細</h2>
      <p>商品名:{ product[0].name }</p>
      <p>SKU:{ product.sku }</p>
      <p>在庫数:{ product.stock }</p>
      <p>商品説明:{ product.explanation }</p>
      <p>価格:{ product.price }</p>
    </div>
  )
};

export default ProductDetail;
