const express = require('express');
const path = require("path");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products.route');
const orderRoutes = require('./api/routes/orders.route');

mongoose.connect('mongodb+srv://abdi:1234@cluster0-f0nx2.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});
app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


module.exports = app;
