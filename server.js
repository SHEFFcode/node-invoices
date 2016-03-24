var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var customers =	require('./routes/customers');
var invoices = require('./routes/invoices');
var PORT = process.env.PORT || 7000;

//Mongoose Connection.
mongoose.connect('mongodb://sheff:123@ds019058.mlab.com:19058/invoice');
var db = mongoose.conneciton;

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

//Routes
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.get('/', function(req, res) {
	res.send('Hello world');
});

app.listen(PORT);
console.log('Server started on port ....' + PORT);