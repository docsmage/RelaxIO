relaxIO.controller('NavCtrl', ['$scope', 'SaveMix', 'LogOut', 'Session', 'SoundService', 'Login', '$uibModal', function ($scope, SaveMix, LogOut, Session, SoundService, Login, $uibModal) {
	
	var modalInstance;

	$scope.openSaveMix = function () {
		modalInstance = $uibModal.open({
			templateUrl: 'templates/savemixpopup.html',
			animate: false,
		});
	};
	
	$scope.openSignUp = function () {
		modalInstance = $uibModal.open({
			templateUrl: 'templates/signuppopup.html',
			animate: false,
		});
	};
	
	$scope.closeModal = function () {
		modalInstance.dismiss();
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
		$scope.closeModal(modalInstance);
		
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