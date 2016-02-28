var express = require('express');
var router = express.Router();
var Customer = require('../models/customer.js');
var Invoice = require('../models/invoice.js');


//Get all customers
router.get('/', function(req, res) {
	Customer.getCustomers(function(err, customers) {
		if (err) {
			res.send(err);
		} else {
			res.json(customers);
		}
	});
});

module.exports = router;