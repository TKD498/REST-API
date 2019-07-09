const mongoose = require('mongoose');
const mongodbStructureer = mongoose.Schema;
//Schema tells the modeler how to store the information
const passedInformation = new mongodbStructureer({
    email: {
        type : String
    },
    password: {
        type : String
    }
})

module.exports = passedInformation;