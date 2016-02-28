relaxIO.directive('slider', function (SoundService) {
	
	return {
		templateUrl: 'templates/slider.html',
		restrict: 'E',
		replace: true,
		
	link: function (scope, element) {	

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
	
		scope.setMasterVolume = function (volume) {
			SoundService.masterSetVolume(volume);
		};
		
		scope.setSoundVolume = function (soundName, volume) {
			SoundService.setSoundVolume(soundName, volume);
		};
			
			var seekBar = element[0];
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
					
					if (element.attr("data-sound") === "all") {
						scope.setMasterVolume(defaultVolume);
					} else {
						scope.setSoundVolume(element.attr("data-sound"), defaultVolume);
					}
					updateSeekPercentage(seekBar, seekBarFillRatio);

				});
				
				$document.bind('mouseup', function(event) {
					$document.unbind('mousemove');
					$document.unbind('mouseup');

				});
					
			});
		}
	}
});