relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', 'SoundService', 'Login', '$modal', function ($scope, SaveMix, LogOut, Session, SoundService, Login, $modal) {

	
	var modalInstance;
	
	$scope.closeModal = function () {
		modalInstance.close();
	};
	
	$scope.openSaveMix = function () {
		modalInstance = $modal.open({
			templateUrl: 'templates/savemixpopup.html',
		});
	};
	
	$scope.openSignUp = function () {
		modalInstance = $modal.open({
			templateUrl: 'templates/signuppopup.html',
		});
	};	
	
	$scope.saveModal = function () {
		if (Session.hasSessionInfo()) {
			$scope.openSaveMix();
		} else {
			$scope.openSignUp();
		}
	};
	
	$scope.saveMix = function () {
		var name = $scope.name;
		SaveMix.saveMix(name);
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
	
}]);