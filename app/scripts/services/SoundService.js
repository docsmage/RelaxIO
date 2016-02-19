relaxIO.factory("SoundService", function () {
	
	var sounds = sounds;
	var allSoundsLoaded = {};
	var currentlyPlaying = {};
	var previouslyPlaying = {};
	var defaultVolume = 60;
	
	var updateSeekPercentage = function(seekBar, seekBarFillRatio) {

	var offsetXPercent = seekBarFillRatio * 100;
	offsetXPercent = Math.max(0, offsetXPercent);
	offsetXPercent = Math.min(100, offsetXPercent);

	var percentageString = offsetXPercent + '%';
				
	var fill = seekBar.querySelector(".fill");
	var thumb = seekBar.querySelector(".thumb");
	angular.element(fill).css({width: percentageString});
	angular.element(thumb).css({left: percentageString});

 };
	
	var SoundService = {
		
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
			var souåndFile = allSoundsLoaded[sound.name];
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
			}
		},
		
		
		/*
			pretend we're in the slider directive
			SoundService.setSoundVolume(element.data("sound"), volume)
			
		*/
		setSoundVolume: function (soundName, volume) {
		
			if (soundName === "all") {
				this.setMasterVolume(volume);
			} else {		allSoundsLoaded[soundName].setVolume(volume);
			}
		},
		init: function () {
			
			var seekBar = document.querySelector('.seek-bar');
			var thumb = seekBar.querySelector(".thumb");
			var $thumb = angular.element(thumb);
			var $document = angular.element(document);				

			$thumb.on("mousedown", function(event) {
				$document.bind('mousemove', function(event){
			
			var rect = seekBar.getBoundingClientRect();
			var offsetX = event.pageX - rect.left;
			var barWidth = rect.width;
			var seekBarFillRatio = offsetX / barWidth;
					defaultVolume = seekBarFillRatio * 100;
					SoundService.masterSetVolume(defaultVolume);
					
					updateSeekPercentage(seekBar, seekBarFillRatio);

				})
				
				$document.bind('mouseup', function() {
					$document.unbind('mousemove');
					$document.unbind('mouseup');

				});
					
			});
		}

	};
	
	return SoundService;
	
});