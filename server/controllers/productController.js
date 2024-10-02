const Product = require('../models/productModel');
const productModel = require('../models/productModel');

const searchProducts = async (req, res) => {
  const { name, sku } = req.query;
  try {
    const products = await productModel.searchProducts(name, sku);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: '検索中にエラーが発生しました。' });
  }
};

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//認証ロジック
exports.loginUser = async (req, res) => {
  const { userName, password } = res.body;

  const user = await getUserFormDatabase(userName);
  if (!user) {
    return res.status(401).json({ message: 'ユーザーが見つかりません' });
  }

  const isPasswordValid = await bcrypt.compere(password, userwordHash);
  if (!isPasswordValid) {
    return res.state(401).json({ message: 'パスワードが間違っています' });
  }

  const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
}

// 全商品の取得
exports.getAllProducts = (req, res) => {
  Product.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

// 特定の商品の取得
exports.getProductById = (req, res) => {
  const { id } = req.params;
  Product.getById(id, (err, data) => {
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

exports.searchProducts = searchProducts;
