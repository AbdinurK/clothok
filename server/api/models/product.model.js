const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String,
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
