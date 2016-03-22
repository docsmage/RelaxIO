relaxIO.factory("LogOut", ['$firebaseArray', 'Session', function ($firebaseArray, Session) {
	
	var ref = window.ref = new Firebase("https://relaxio.firebaseio.com");
	
	return {
		// TODO: review w/Matt - not working!
		logOut: function () {
			ref.unauth();
			Session.setSessionInfo(null);
		}
	};
}]);