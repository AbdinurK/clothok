const Product = require('../models/product.model');
const Oder = require('../models/order.model');


exports.getAllProducts = (req, res, next) => {
    Product
        .find()
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                include: [Oder]
            });
        })
};

exports.createProduct = (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        images: req.files.map(item => item.path),
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
    Product.update({ _id: id }, { $set: req.body })
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
