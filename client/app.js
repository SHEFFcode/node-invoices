var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'DashboardController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		templateUrl: 'views/customers.html'
	})
	.when('/customers/:id', {
		controller: 'CustomersController',
		templateUrl: 'views/customer_details.html'
	})
	.when('/invoices/', {
		controller: 'InvoiceController',
		templateUrl: 'views/invoices.html'
	})
	.when('/invoices/:id', {
		controller: 'InvoiceController',
		templateUrl: 'views/invoice_details.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});