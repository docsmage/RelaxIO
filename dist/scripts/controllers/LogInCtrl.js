relaxIO.controller('logInCtrl', ['$scope', '$cookies',  function ($scope, $cookies) {
	
	$scope.logIn = function (email, password) {
		$cookies.relaxioUser = email;
	}
	
}]);