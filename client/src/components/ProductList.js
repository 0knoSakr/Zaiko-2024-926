import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState("");
  const [sku, setSku] = useState("");

  //商品をロードする関数
  const loadProducts = useCallback(async () => {
    try {
      const result = await fetchProducts(items, sku);
      setProducts(result);
    } catch (error) {
      console.error("商品情報の取得に失敗しました:", error);
    }
  },[items, sku]);

  //コンポーネントがマウントされたときとitemsまたはskuが変更されたとき
  //商品をロード
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      <h2>商品リスト</h2>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        placeholder="商品名"
      />
      <button onClick={loadProducts}>商品名で検索</button>
      <input
        type="text"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        placeholder="SKU"
      />
      <button onClick={loadProducts}>SKUで検索</button>
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
