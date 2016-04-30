relaxIO.factory("DeleteMix", ["SoundService", "Session", function (SoundService, Session) {
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		deleteMix: function (mix) {

			var r = confirm("Are you sure you want to delete this mix?");
			
			if (r == true) {
				
				ref.child("/user/" + Session.getUserId() + "/mixes/" + mix.name).remove();
				
			} else {
				return;
			}
			
		}
		
	}
	
}]);