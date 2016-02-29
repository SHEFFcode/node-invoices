var myApp = angular.module('myApp');

myApp.controller('InvoiceController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
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
}]);
