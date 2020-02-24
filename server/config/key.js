const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://abdi:1234@cluster0-2z6og.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

const connectDB = async () => {
    mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    console.log('DB connected!');
};
module.exports = connectDB;
