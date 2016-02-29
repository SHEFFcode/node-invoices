var express = require('express');
var router = express.Router();
var Customer = require('../models/customer.js');
var Invoice = require('../models/invoice.js');


//Get all invoices
router.get('/', function(req, res) {
	Invoice.getInvoices(function(err, invoices) {
		if (err) {
			res.send(err);
		} else {
			res.json(invoices);
		}
	});
});

//Get one invoice by id
router.get('/:id', function(req, res) {
	Invoice.getInvoiceById(req.params.id, function(err, invoice) {
		if (err) {
			res.send(err);
		} else {
			res.json(invoice);
		}
	});
});

//Add invoice
router.post('/', function(req, res) {
	var invoice = req.body;
	Invoice.addInvoice(invoice, function(err, invoice) {
		if (err) {
			res.send(err);
		} else {
			res.json(invoice);
		}
	});
});

//Update invoice
router.put('/:id', function(req, res) {
	var id = req.params.id;
	var invoice = req.body;
	Invoice.updateInvoice(id, invoice, {}, function(err, invoice) {
		if (err) {
			res.send(err);
		} else {
			res.json(invoice);
		}
	});
});

//Delete invoice
router.delete('/:id', function(req, res) {
	var id = req.params.id;
	Invoice.removeInvoice(id, function(err, invoice) {
		if (err) {
			res.send(err);
		} else {
			res.json(invoice);
		}
	});
});

//Get all invoices for a single customer
router.get('/customer/:customer_id', function(req, res) {
	var customer_id = req.params.customer_id;
	Invoice.getCustomerInvoices(customer_id, function(err, invoices){
		if (err) {
			res.send(err);
		} else {
			res.json(invoices);
		}
	});
});

module.exports = router;