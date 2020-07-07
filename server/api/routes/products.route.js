const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/upload');
const ProductsController = require('../../controllers/product.controller');

router.get('/', ProductsController.getAllProducts);
router.post('/', upload, ProductsController.createProduct);
router.get('/:productId', ProductsController.getProduct);
router.patch('/:productId', ProductsController.updateProduct);
router.delete('/:productId', ProductsController.deleteProduct);


module.exports = router;
