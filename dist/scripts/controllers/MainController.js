relaxIO.controller('MainController', function ($scope, SoundService) {
	
	$scope.title = "RelaxIO";
	
	// a new soundService object
	$scope.SoundService = SoundService;
	
	// sounds objects from sounds.js
	$scope.sounds = angular.copy(sounds);
	
	// play and pause individual sounds
	$scope.playPauseSound = function (sound) {
		SoundService.playOrPause(sound);
	};
	
});