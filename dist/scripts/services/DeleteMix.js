relaxIO.factory("DeleteMix", ["SoundService", "Session", function (SoundService, Session) {
	
	
	var ref = new Firebase("https://relaxio.firebaseio.com/users");
	
	return {
		
		deleteMix: function (mix) {

			var r = confirm("Are you sure you want to delete this mix?");
			
			if (r == true) {
				var mix = {name: name};
				ref.child("/user/" + Session.getUserId() + "/mixes/" + mix).remove();
			} else {
				return;
			}
			
		}
		
	}
	
}]);