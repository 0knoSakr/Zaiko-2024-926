import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState(""); //検索するためのデータを持ってくる
  const [products, setProducts] = useState([]); //一覧表示
  const [allProducts, setAllProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); //検索結果の可否

  useEffect(() => {
    // api.jsを通じてAPIリクエストを送る
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => console.error("商品情報の取得に失敗しました:", error));
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) {
      setProducts(allProducts);
      setErrorMessage("");
      return;
    }

    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (results.length === 0) {
      setErrorMessage("該当する商品がありません。");
    } else {
      setErrorMessage("");
    }
    setProducts(results);
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
      {errorMessage && <p>{errorMessage}</p>}

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
