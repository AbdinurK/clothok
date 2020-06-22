const mongoose = require('mongoose');
const Product = require('../models/product.model');


exports.getAllProducts = (req, res, next) => {
    Product
        .find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
};

exports.createProduct = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        image: req.file.path,
        code: req.body.code,
        description: req.body.description,
        delivery: req.body.delivery,
        orderCount: req.body.orderCount,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'No valid id!'
                })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.updateProduct = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.remove({
        _id: id
    })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};
