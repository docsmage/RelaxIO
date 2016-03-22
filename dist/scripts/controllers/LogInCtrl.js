relaxIO.controller('LogInCtrl', ['$scope', '$cookies', 'Login', '$state', function ($scope, $cookies, Login, $state) {
	
	$scope.logIn = function (email, password) {
		Login.logIn(email, password, function () {
			$state.go("home");
		});
	}
	
}]);