relaxIO.factory("SoundService", function () {
	
	var sounds = sounds;
	// I have no idea if this is helpful
	var allSoundsPlaying = {};
	
	return {
		
		// load sounds
		loadSound: function (sound) {
			
			if (!allSoundsPlaying[sound.name]) {
				allSoundsPlaying[sound.name] = new buzz.sound(sound.audioUrl, {
					formats: [ 'mp3' ],
					preload: true
				});
			}
			
		},

		
		// determines whether to play or pause a sound
		playOrPause: function (sound) {		
			this.loadSound(sound);
			
			var soundFile = allSoundsPlaying[sound.name];
			
			soundFile.togglePlay();
			
		},
		
		// needed for HTML to switch between play & pause buttons
		isPlayingSound: function (sound) {
			var soundFile = allSoundsPlaying[sound.name];
			
			return soundFile !== undefined && soundFile.playing;
		}
		
	}; // ends return
	
});