var myApp = angular.module('myApp');

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	console.log('customers controller initialized');

	//get customers
	$scope.getCustomers = function() {
		$http.get('/api/customers').success(function(response) {
			$scope.customers = response;
		});
	}

	//get customer details
	$scope.getCustomer = function() {
		var id = $routeParams.id;
		$http.get('/api/customers/' + id).success(function(response) {
			$scope.customer = response;
		});
	}

	//get customers
	$scope.getCustomerInvoices = function() {
		var id = $routeParams.id;
		$http.get('/api/invoices/customer/' + id).success(function(response) {
			$scope.customer_invoices = response;
		});
	}

	//add Customer
	$scope.addCustomer = function() {
		$http.post('/api/customers/', $scope.customer).success(function(response) {
			window.location.href = '#/customers';
		});
	}

	//update Customer
	$scope.updateCustomer = function() {
		$http.put('/api/customers/' + $scope.customer._id, $scope.customer).success(function(response) {
			window.location.href = '#/customers';
		});
	}

	$scope.deleteCustomer = function(id) {
		$http.delete('/api/customers/' + id).success(function(response) {
			window.location.href = '#/customers';
		});
	}
}]);
