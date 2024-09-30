import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productService from "../services/productService";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await productService.searchProducts(searchTerm);
      setProducts(response.data);
      setErrorMessage(response.data.length === 0 ? '該当する商品がありません。' : '');
    } catch (error) {
      setErrorMessage("検索に失敗しました。");
    }
  };

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
