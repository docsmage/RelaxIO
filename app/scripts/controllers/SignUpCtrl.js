relaxIO.controller('SignUpCtrl', ['$scope', '$cookies', 'Signup',  function ($scope, $cookies, Signup) {
	
	$scope.signUp = function (email, password) {
		Signup.signUp(email, password, function (user) {
			debugger;
		});
	}
	
}]);