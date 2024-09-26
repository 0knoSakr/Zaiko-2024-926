const db = require('../config/db');

// 商品のモデル
const Product = function (product) {
  this.name = product.name;
  this.sku = product.sku;
  this.stock = product.stock;
};

// 全商品の取得
Product.getAll = (result) => {
  db.query('SELECT * FROM products', (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// 商品の追加
Product.create = (newProduct, result) => {
  db.query('INSERT INTO products SET ?', newProduct, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newProduct });
  });
};

// 商品の更新
Product.update = (id, product, result) => {
  db.query('UPDATE products SET ? WHERE id = ?', [product, id], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// 商品の削除
Product.remove = (id, result) => {
  db.query('DELETE FROM products WHERE id = ?', id, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// 在庫が50個以下の商品を取得するSQL
Product.getLowStock = (result) => {
  db.query('SELECT * FROM products WHERE stock <= 50', (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Product;
