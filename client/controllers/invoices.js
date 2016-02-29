var myApp = angular.module('myApp');

myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	console.log('Invoices controller initialized');

	//get invoices
	$scope.getInvoices = function() {
		$http.get('/api/invoices').success(function(response) {
			$scope.invoices = response;
		});
	}

	//get invoice details
	$scope.getInvoice = function() {
		var id = $routeParams.id;
		$http.get('/api/invoices/' + id).success(function(response) {
			$scope.invoice = response;
		});
	}

		//get customers
	$scope.getCustomers = function() {
		$http.get('/api/customers').success(function(response) {
			$scope.customers = response;
			console.log(response);
		});
	}

		//add Invoice
		$scope.addInvoice = function() {
		$http.post('/api/invoices/', $scope.invoice).success(function(response) {
			window.location.href = '#/invoices';
		});
	}
}]);
