relaxIO.factory("SoundService", function () {
	
	var sounds = sounds;
	var allSoundsLoaded = {};
	var currentlyPlaying = {};
	var previouslyPlaying = {};
	var defaultVolume = 60;

	var SoundService = {
		getCurrentlyPlaying: function () {
			var soundData = [];
			
			for (var sound in currentlyPlaying) {
				soundData.push({
					name: sound,
					volume: allSoundsLoaded[sound].getVolume()
				})
			}
			
			return soundData;
		},

		// load sounds
		loadSound: function (sound) {
			if (!allSoundsLoaded[sound.name]) {
				allSoundsLoaded[sound.name] = new buzz.sound(sound.audioUrl, {
					formats: [ 'mp3' ],
					preload: true,
					loop: true,
					volume: defaultVolume
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
		masterSetVolume: function (volume) {
			for (var sound in allSoundsLoaded) {
				allSoundsLoaded[sound].setVolume(volume);
				defaultVolume = volume;
			}
		},
		setSoundVolume: function (soundName, volume) {
		// check to see if song is loaded before you change the volume
			allSoundsLoaded[soundName].setVolume(volume);
		}
	};
	
	return SoundService;
	
});