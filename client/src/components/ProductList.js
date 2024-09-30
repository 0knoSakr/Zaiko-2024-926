import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../services/productService";
import api from "../services/api";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");//検索するためのデータを持ってくる
  const [products, setProducts] = useState([]);//一覧表示
  const [errorMessage, setErrorMessage] = useState("");//検索結果の可否
  const [searchResults, setSearchResults] = useState([]);//検索結果の保持

  useEffect(() => {
    // api.jsを通じてAPIリクエストを送る
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('商品情報の取得に失敗しました:', error));
  }, []);

  const handleSearch = async () => {
    try {
      const response = await productService.searchProducts(searchTerm);
      setProducts(response.data);
      setErrorMessage(response.data.length === 0 ? '該当する商品がありません。' : '');
    } catch (error) {
      setErrorMessage("検索に失敗しました。");
    }
  };
  console.log(products)

  return (
    <div>
      <h2>商品リスト</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="商品名またはSKUで検索"
      />
      <button onClick={handleSearch}>検索</button>
      {errorMessage && <p>{ errorMessage }</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - 在庫: {product.stock}
            <button>
              <Link to={`/products/${product.id}`}>詳細へ</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
