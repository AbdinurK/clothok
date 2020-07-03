const mongoose = require('mongoose');
const Order = require('../models/order.model');

exports.getAllOrders = (req, res, next) => {
    Order
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
exports.createOrder = (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        quantity: req.body.quantity,
    });
    order
        .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};
exports.getOrder = (req, res, next) => {
    const id = req.params.orderId;
    Order.findById(id)
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
exports.updateOrder = (req, res, next) => {
    const id = req.params.orderId;
    Order.update({ _id: id }, { $set: req.body })
        .exec()
        .then(results => {
            res.status(200).json({
                message: "Successfully updated!",
                results
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Cannot update order!",
                error: err
            });
        });
};
exports.deleteOrder = (req, res, next) => {
    const id = req.params.orderId;
    Order.remove({
        _id: id
    })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Successfully deleted!",
                result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Cannot delete order!",
                error: err
            })
        })
};
