relaxIO.factory("SaveMix", ["SoundService", "Session", function (SoundService, Session) {
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		saveMix: function (name) {
			
			// save mix name
			var mix = {
				name: name,
				
				// compile sounds & volumes
				sounds: SoundService.getCurrentlyPlaying()
			};
			
			// save to 'mixes' area
			ref.child("/user/" + Session.getUserId() + "/mixes/" + name).set(mix);
		},
		
		// load saved mixes
		getMixes: function (callback) {				
		// grabbing user info	
			ref.child("user").orderByKey().equalTo(Session.getUserId()).on("value", function(snapshot) {
				var user = snapshot.val();
			
				callback(user[Object.keys(user)[0]].mixes);
			}, function (errorObject) {
			});
		}
	
	}
}]);