relaxIO.factory("SoundService", function () {
	
	// holds all sounds
	var sounds = sounds;
	// should only hold sounds currently playing
	var allSoundsLoaded = {};
	
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
		
		// determines whether to play or pause a sound
		playOrPause: function (sound) {		
			this.loadSound(sound);
			var soundFile = allSoundsLoaded[sound.name];
			soundFile.togglePlay();
			// switches between play or pause
		},
		
		// needed for HTML to switch between play & pause buttons
		isPlayingSound: function (sound) {
			var soundFile = allSoundsLoaded[sound.name];
			//debugger;
			return soundFile !== undefined && !soundFile.isPaused();
		}
		
	}; // ends return
	
});