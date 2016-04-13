relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', 'SoundService', 'Login', '$modal', function ($scope, SaveMix, LogOut, Session, SoundService, Login, $modal) {
	
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
			$scope.mixes = mixes;
		});	
	});
	
	$scope.playMix = function (mix) {
		SoundService.loadSounds(mix.sounds);
	};
	
	$scope.open = function () {
		var modalInstance = $modal.open({
			templateUrl: 'templates/savemixpopup.html',
		});
	};
	
}]);