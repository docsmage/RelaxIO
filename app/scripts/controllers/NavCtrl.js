relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', function ($scope, SaveMix, LogOut, Session) {
	
	$scope.saveMix = function () {
		SaveMix.saveMix();
	};
	
	$scope.logOut = function () {
		LogOut.logOut();
	};
	
	$scope.isLoggedIn = Session.hasSessionInfo;
	
}]);