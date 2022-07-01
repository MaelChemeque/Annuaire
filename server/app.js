// imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// declarations
const PORT = 3000;
const route = require('./routes/route');

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

// connection to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb');
});


// testing server
app.get('/', (req, res) => {
    res.send('hello World');
})


//lauch server
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});