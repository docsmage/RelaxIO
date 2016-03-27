relaxIO.controller('SignUpCtrl', ['$scope', '$cookies', 'Signup', '$state',  function ($scope, $cookies, Signup, $state) {
	
	$scope.signUp = function (email, password) {
		Signup.signUp(email, password, function (user) {
			$state.go("home");
		});
	}
	
}]);