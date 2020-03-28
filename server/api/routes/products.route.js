const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const ProductsController = require('../controllers/products.controller');

router.get('/', ProductsController.getAllProducts);
router.post('/', upload, ProductsController.createProduct);
router.get('/:productId', ProductsController.getProduct);
router.patch('/:productId', ProductsController.getProduct);
router.delete('/:productId', ProductsController.deleteProduct);


module.exports = router;
