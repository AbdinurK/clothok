const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png' || file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: fileFilter
});

const Product = require('../models/product.model');

// GET all
router.get('/', (req, res, next) => {
    Product
        .find()
        .exec()
        .then(docs => {
            // const response = {
            //     count: docs.length,
            //     products: docs.map(doc => {
            //         return {
            //
            //         }
            //     })
            // };
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
});

// POST product
router.post('/', upload.array('image', 5), (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        image: req.files,
        description: req.body.description,
        delivery: req.body.delivery,
        orderCount: req.body.orderCount,
        price: req.body.price
    });
    console.log(req.body, req.file);
    product.save()
        .then(result => {
            res.status(201).json({
                message: 'Handling post',
                createdProduct: {
                    title: result.title,
                    price: result.price
                }
            })
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});


// GET product
router.get('/:productId', (req, res, next) => {
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
});

// PATCH product
router.patch('/:productId', (req, res, next) => {
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
});

router.delete('/:productId', (req, res, next) => {
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
});


module.exports = router;
