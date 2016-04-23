relaxIO.factory("DeleteMix", ["SoundService", "Session", function (SoundService, Session) {
	
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		deleteMix: function (mix) {
		debugger;
			
			// DON'T CHANGE THIS
			var mix = {
				name: name};
			
			ref.child("/user/" + Session.getUserId() + "/mixes/" + mix.name).remove();
				
		}
		
	}
	
}]);