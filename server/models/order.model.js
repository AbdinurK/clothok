const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = Order = mongoose.model('orders', orderSchema);
