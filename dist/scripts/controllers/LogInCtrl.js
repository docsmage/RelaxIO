relaxIO.controller('LogInCtrl', ['$scope', '$cookies', 'Login', function ($scope, $cookies, Login) {
	
	$scope.logIn = function (email, password) {
		Login.logIn(email, password, function (user) {
		});
	}
	
}]);