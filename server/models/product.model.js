const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        required: false
    },
    images: {
        type: Array,
    },
    elements: {
        type: Array
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    delivery: {
        type: Number,
        required: true
    },
    orderCount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = Product = mongoose.model('products', productSchema);
