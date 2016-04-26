relaxIO.factory("SoundService", ["Sounds", function (Sounds) {
	
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
		
		loadSounds: function (data) {
			var sounds = Sounds.sounds;
			this.pauseAll();
			for (var i = 0, total = data.length; i < total; i++) {
				for (var j = 0, totalSounds = sounds.length; j < totalSounds; j++) {
					if (sounds[j].name === data[i].name) {
						console.log("Playing sound " + sounds[j].name + " at " + data[i].volume);
						this.playOrPause(sounds[j], data[i].volume);
						break;
					}
				}
			}
		},
		// load sounds
		loadSound: function (sound, volume) {
			if (!allSoundsLoaded[sound.name]) {
				allSoundsLoaded[sound.name] = new buzz.sound(sound.audioUrl, {
					formats: [ 'mp3' ],
					preload: true,
					loop: true,
					volume: volume || defaultVolume
				});
			}
		},
		
		playOrPause: function (sound, volume) {		
			this.loadSound(sound, volume);
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
					
				// check to make sure the song is playing before we add it
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
		setSoundVolume: function (sound, volume) {
		// check to see if song is loaded before you change the volume
			allSoundsLoaded[sound].setVolume(volume);
		}
	};
	
	return SoundService;
	
}]);