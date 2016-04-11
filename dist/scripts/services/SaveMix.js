relaxIO.factory("SaveMix", ["SoundService", "Session", function (SoundService, Session) {
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		saveMix: function () {
			
			if (Session.hasSessionInfo()) {
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
			} else {
				alert("You're not signed up yet!");
			}
		},
		
		getMixes: function (callback) {			
			ref.child("user").orderByKey().equalTo(Session.getUserId()).on("value", function(snapshot) {
				var user = snapshot.val();
				callback(user[Object.keys(user)[0]].mixes);
				callback(snapshot.val());
			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			});
		}
	
	}
}]);