const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');

var contactController = require('./controllers/contactController');

var app = express();



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
//res.header("Access-Control-Allow-Origin", "*");

// app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () =>{
    console.log('Server Started at port :3000');
})


app.use('/contacts', contactController);