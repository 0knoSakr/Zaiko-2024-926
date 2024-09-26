import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductForm from './components/ProductForm';
import StockAlert from './components/StockAlert'; // 在庫アラートをインポート
import './App.css'; // スタイル用のCSSファイルをインポート

const App = () => {
  return (
    <Router>
      <div>
        {/* ヘッダー部分 */}
        <header className="header">
          <div className="header-content">
            <h1>在庫管理システム</h1>
            {/* ナビゲーションリンクをヘッダー内に配置 */}
            <nav>
              <ul>
                <li>
                  <Link to="/">ダッシュボード</Link>
                </li>
                <li>
                  <Link to="/add-product">商品を追加</Link>
                </li>
                <li>
                  <Link to="/alerts">在庫アラート</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* コンテンツ部分 */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-product" element={<ProductForm />} />
            <Route path="/alerts" element={<StockAlert />} />{' '}
            {/* 在庫アラート */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
