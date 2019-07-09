//Selecting dependences
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Selecting My files
const db = require('./db');
const userf = require('./user')

//The modeler stores the information based on how mongodbStructureer tells it to.
const modeler = mongoose.model('users',userf);

//creating access to express and creating a hostingAddress
const expressAccess = express();
const hostingAddress = process.env.PORT || 3000;

//Displaying Form
expressAccess.use(express.static('public'));

//Allowing use of body-parser for the rest of the program
expressAccess.use(bodyParser.urlencoded({ extended : false})); //What does urlencoded mean

expressAccess.use(bodyParser.json())//What does this do

//Creating Selection of Data
expressAccess.post('/data-sent', (req, res)=>{
    //Telling the program how to get the information(email and password) from the user interface.
    var email = req.body.email;
    var password = req.body.pwd;
    //creating object to hold data from front end
    var userInfo = {
            email: email,
            password: password
        }

   const user = new modeler(userInfo);
   user.save();
    //Telling me what on the terminal below
    console.log(userInfo);
    //Telling me on the website that I was SUCCESSFULLLLLLL
    res.send("Success")
})

//Starting the program
expressAccess.listen(hostingAddress, ()=>{
    console.log('---------------------------------')
//Telling me how the computer reads it
    console.log(`Server Started at Port: ${hostingAddress}`)
    console.log('---------------------------------')
//Telling me where to access it 
    console.log(`Access program at: localhost:${hostingAddress}`)
    console.log('---------------------------------')
});