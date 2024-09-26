//商品詳細ページ
import React from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>商品詳細</h2>
      <p>商品:{ id }</p>
    </div>
  )
}

export default ProductDetail;
