// client/src/pages/Dashboard.js
import React from 'react';
import ProductList from '../components/ProductList'; // 商品リストコンポーネント

const Dashboard = () => {
  return (
    <div>
      <h2>在庫ダッシュボード</h2>
      <ProductList />
    </div>
  );
};

export default Dashboard;
