relaxIO.factory("SoundService", function () {
	
	var sounds = sounds;
	var allSoundsLoaded = {};
	var masterPausePlay = {};
	
	return {
		
		masterPausePlay: {},
		
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
		
		// determines whether to play or pause a sound, also tracks status to add to masterPausePlay
		playOrPause: function (sound) {		
			this.loadSound(sound);
			var soundFile = allSoundsLoaded[sound.name];
			soundFile.togglePlay();
			
			if (!masterPausePlay[sound.name] && !soundFile.isPaused()) {
			 masterPausePlay[sound.name] = soundFile;
				}
			else if (masterPausePlay[sound.name] && soundFile.isPaused()) {
					delete masterPausePlay[sound.name];
			}
			else {
				return;
			}

		},

		// toggles play-pause for all sounds
		playPauseAll: function () {
			for (var sound in allSoundsLoaded) {
				// for all sounds loaded
				if (!allSoundsLoaded[sound].isPaused()) // if sound is playing
				{
					masterPausePlay[sound] = true;
					// add sound to mPP object
					allSoundsLoaded[sound].pause();
					// pause the sound
				}
				else {
					// if sound is paused
					allSoundsLoaded[sound].play();
				// play the sound
					masterPausePlay = {};
			// empty out masterPausePlay
				}
			}
		},
		
		// returns true if mPP is empty		
		allPaused: function () {
			for (var sound in masterPausePlay) {
				return !masterPausePlay.hasOwnProperty(sound.name);
			}
		},
		
		// returns true if a sound is playing
		isPlayingSound: function (sound) {
			var soundFile = allSoundsLoaded[sound.name];
			return soundFile !== undefined && !soundFile.isPaused();
		}
		
	}; // ends return
	
});