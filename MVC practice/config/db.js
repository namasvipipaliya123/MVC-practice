const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pipaliyanamasvi:8102005@mvc.dn96l.mongodb.net/?retryWrites=true&w=majority&appName=MVC');
    console.log('connect to database');
}

module.exports = connectDB;