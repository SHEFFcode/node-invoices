var myApp = angular.module('myApp');

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	console.log('customers controller initialized');

	//get customers
	$scope.getCustomers = function() {
		$http.get('/api/customers').success(function(response) {
			$scope.customers = response;
			console.log(response);
		});
	}

	//get customer details
	$scope.getCustomer = function() {
		var id = $routeParams.id;
		$http.get('/api/customers/' + id).success(function(response) {
			$scope.customer = response;
		});
	}
}]);