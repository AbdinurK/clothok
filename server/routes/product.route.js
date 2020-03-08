const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.route('/create').post((req, res, next) => {
    Product.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student created successfully!')
        }
    })
});

router.route('/').get((req, res) => {
    Product.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/update/:id').put((req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student updated successfully!')
        }
    })
});

router.route('/delete/:id').delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});


module.exports = router;
