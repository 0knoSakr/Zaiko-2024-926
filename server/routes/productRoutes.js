const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// 在庫が少ない商品を取得するエンドポイント
router.get('/low-stock', productController.getLowStockProducts);

module.exports = router;
