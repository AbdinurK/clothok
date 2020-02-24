import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
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

const Product = model('product', productSchema);
module.exports = Product;
