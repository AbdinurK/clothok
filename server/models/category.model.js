const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    name: {
        type: String,
        required: true
    }
});

module.exports = Category = mongoose.model('categories', categorySchema);
