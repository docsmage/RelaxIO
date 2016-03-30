relaxIO.factory("SaveMix", ["SoundService", "Session", function (SoundService, Session) {
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		saveMix: function () {
			// allow them to enter a name
			var mix = {
				name: prompt("Enter a name")
				// TODO: rewrite as styled popup
				,
				// compile sounds & volumes
				sounds: SoundService.getCurrentlyPlaying()
			};
			// save to 'mixes' area
			ref.child("/user/" + Session.getUserId() + "/mixes").set(mix);
		}
	}
	
}]);