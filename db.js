const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/Epic1st', { useNewUrlParser : false }, function(err){
    if(err){
        throw err;
    } else {
        console.log("Database SUCCESSSSSSSSSSSS!!!")
    }
})

module.exports = connection;