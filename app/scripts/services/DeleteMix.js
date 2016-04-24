relaxIO.factory("DeleteMix", ["SoundService", "Session", function (SoundService, Session) {
	
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		deleteMix: function (mix) {
		// TODO: add alert that asks "Are you sure you want to delete {{mix.name}}?" Which requires an 'OK' and has a Cancel option
			
			debugger;
			
			// DON'T CHANGE THIS
			var mix = {
				name: name};
			
			ref.child("/user/" + Session.getUserId() + "/mixes/" + mix).remove();
				
		}
		
	}
	
}]);