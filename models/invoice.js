var mongoose = require('mongoose');

//Invoice Schema
var invoiceSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	company: {
		type: String
	},
	logoUrl: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	address: {
		street: String,
		city: String,
		state: String,
		zip: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

//Get Customer
module.exports.getInvoices = function(callback, limit) {
	Invoice.find(callback).limit(limit).sort([['first_name', 'ascending']]);
};