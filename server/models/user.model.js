const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('users', userSchema);
