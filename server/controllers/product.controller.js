const Product = require('../models/product.model');

const getAllProducts = (req, res, next) => {
    Product.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'An error occurred!'
            })
        })
};

const getProductById = (req, res, next) => {
    let productID = req.body.productID;
    Product.findById(productID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occurred!'
            })
        })
};

const createProduct = (req, res, next) => {
    let product = new Product({
        title: req.body.title,
        description: req.body.description,
        delivery: req.body.delivery,
        orderCount: req.body.orderCount,
        price: req.body.price
    });
    if (req.file) {
        product.image = req.file.path
    }
    product.save()
        .then(response => {
            res.json({
                message: 'Product added successfully!'
            })
        }).catch(error => {
            res.json({
                message: 'Error' + error
            })
        })
};

const updateById = (req, res, next) => {
    let productID = req.body.productID;
    let updatedData = {
        title: req.body.title,
        description: req.body.description,
        delivery: req.body.delivery,
        orderCount: req.body.orderCount,
        price: req.body.price
    };
    Product.findByIdAndUpdate(productID, { $set: updatedData })
        .then(() => {
             res.json({
                 message: 'Product updated successfully!'
             })
        })
        .catch(error => {
            res.json({
                message: 'An error occurred!' + error
            })
        })
};

const deleteById = (req, res, next) => {
    let productID = req.body.productID;
    Product.findByIdAndRemove(productID)
        .then(() => {
            res.json({
                message: 'Product deleted successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'Error' + error
            })
        })
};


module.exports = {
    getAllProducts, getProductById, createProduct, updateById, deleteById
};
