relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', 'SoundService', function ($scope, SaveMix, LogOut, Session, SoundService) {
	
	$scope.saveMix = function () {
		SaveMix.saveMix();
	};
	
	$scope.logOut = function () {
		LogOut.logOut();
	};
	
	$scope.isLoggedIn = Session.hasSessionInfo;
	
	$scope.toggleAll = function () { SoundService.toggleAll();
	};	
	
}]);