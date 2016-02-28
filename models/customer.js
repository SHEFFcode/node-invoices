var mongoose = require('mongoose');

//Customer Schema
var customerSchema = mongoose.Schema({
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

var Customer = module.exports = mongoose.model('Customer', customerSchema);

//Get Customer
module.exports.getCustomers = function(callback, limit) {
	Customer.find(callback).limit(limit).sort([['first_name', 'ascending']]);
};