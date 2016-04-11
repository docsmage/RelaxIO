relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', 'SoundService', 'Login', function ($scope, SaveMix, LogOut, Session, SoundService, Login) {
	
	$scope.saveMix = function () {
		SaveMix.saveMix();
	};
	
	$scope.logOut = function () {
		LogOut.logOut();
	};
	
	$scope.isLoggedIn = Session.hasSessionInfo;
	
	$scope.toggleAll = function () { SoundService.toggleAll();
	};
	
	$scope.isAnyPlaying = SoundService.isAnyPlaying;
	
	Login.onLogin(function () {
		SaveMix.getMixes(function (mixes) {
			debugger;
			$scope.mixes = mixes;
		});
	});
}]);