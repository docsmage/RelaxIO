relaxIO.factory("SaveMix", ["SoundService", "Session", function (SoundService, Session) {
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		saveMix: function () {
			// allow them to enter a name
			var mix = {
				name: prompt("Enter a name")
				// TODO: rewrite as styled popup
				,
				// compile list of sounds & volumes
				sounds: SoundService.getCurrentlyPlaying()
			};
			// next step: set user id off of auth - use getUserId from Session service, figure out how to replace Firebase's autogenerated UID with this info
//			var mixes = ref.child("user1234/mixes");
			//var mixes = Session.getUserId();
			// figure out how to replace firebases autotoken with the above!
			
			ref.child("/user/" + Session.getUserId() + "/mixes").set(mix);
		}
		
	}
	
}]);