const Product = require('../models/productModel');

// 全商品の取得
exports.getAllProducts = (req, res) => {
  Product.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

// 商品の追加
exports.addProduct = (req, res) => {
  const newProduct = new Product(req.body);
  Product.create(newProduct, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

// 商品の更新
exports.updateProduct = (req, res) => {
  Product.update(req.params.id, new Product(req.body), (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

// 商品の削除
exports.deleteProduct = (req, res) => {
  Product.remove(req.params.id, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send({ message: 'Product was deleted successfully!' });
  });
};

// 在庫アラート用（在庫が50個以下の商品を取得）
exports.getLowStockProducts = (req, res) => {
  Product.getLowStock((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.send(data);
    }
  });
};
