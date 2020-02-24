const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/key');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
