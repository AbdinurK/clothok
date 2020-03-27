const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const upload = require('../middleware/upload');

router.get('/', productController.getAllProducts);
router.post('/show', productController.getProductById);
router.post('/create', upload.single('image'), productController.createProduct);
router.post('/update', productController.updateById);
router.post('/delete', productController.deleteById);


module.exports = router;
