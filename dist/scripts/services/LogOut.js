relaxIO.factory("LogOut", ['$firebaseArray', 'Session', '$firebaseAuth', function ($firebaseArray, Session, $firebaseAuth) {

	// var ref = window.ref = new Firebase("https://relaxio.firebaseio.com");

  var auth = $firebaseAuth();	
	
	return {
		logOut: function () {
			auth.$signOut();
			Session.setSessionInfo(null);
		}
	};
}]);