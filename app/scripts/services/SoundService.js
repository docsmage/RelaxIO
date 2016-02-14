relaxIO.factory("SoundService", function () {
	
	var sounds = sounds;
	var allSoundsLoaded = {};
	var currentlyPlaying = {};
	var previouslyPlaying = {};
	var defaultVolume = 60;
	
	return {
		
		// load sounds
		loadSound: function (sound) {
			if (!allSoundsLoaded[sound.name]) {
				allSoundsLoaded[sound.name] = new buzz.sound(sound.audioUrl, {
					formats: [ 'mp3' ],
					preload: true,
					loop: true
				});
			}
		},
		
		playOrPause: function (sound) {		
			this.loadSound(sound);
			var soundFile = allSoundsLoaded[sound.name];
			if (soundFile.isPaused()) {
				currentlyPlaying[sound.name] = true;
			} else {
				delete currentlyPlaying[sound.name];
			}
			
			soundFile.togglePlay();

		},
		
		toggleAll: function () {
			debugger;
			if (this.isAnyPlaying()) {
				this.pauseAll();
			} else {
				this.playAll();
			}
		},

		pauseAll: function () {
			previouslyPlaying = {};
			
			for (var sound in allSoundsLoaded) {
				{
					previouslyPlaying[sound] = true;
					allSoundsLoaded[sound].pause();
				}
			}
			
			currentlyPlaying = {};
		},
		
		playAll: function () {
			for (var sound in previouslyPlaying) {
				allSoundsLoaded[sound].play();
			}
			
			currentlyPlaying = previouslyPlaying;
			previouslyPlaying = {};
		},

		isAnyPlaying: function () {
			return Object.keys(currentlyPlaying).length;
		},
		
		isPlayingSound: function (sound) {
			var soundFile = allSoundsLoaded[sound.name];
			return soundFile !== undefined && !soundFile.isPaused();
		},
		
		setVolume: function (volume) {
			if (soundFile) {
				soundFile.setVolume(volume);
			}
		}
		
	};
	
});