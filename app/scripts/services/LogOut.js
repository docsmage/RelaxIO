relaxIO.factory("LogOut", ['$firebaseArray', 'Session', function ($firebaseArray, Session) {
	
	var ref = window.ref = new Firebase("https://relaxio.firebaseio.com");
	
	return {
		logOut: function () {
			ref.unauth();
			Session.setSessionInfo(null);
		}
	};
}]);