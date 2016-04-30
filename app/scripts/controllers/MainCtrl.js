relaxIO.controller('MainCtrl', function ($scope, SoundService, Sounds) {
	
	// a new soundService object
	$scope.SoundService = SoundService;
	
	// sounds objects from sounds.js
	$scope.sounds = Sounds.sounds;
	
	// play and pause individual sounds
	$scope.playPauseSound = function (sound) {
		SoundService.playOrPause(sound);
	};
	
});