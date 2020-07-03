const express = require('express');
const router = express.Router();
const OrderController = require('../../controllers/order.controller');


router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrder);
router.patch('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);


module.exports = router;
