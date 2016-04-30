relaxIO.factory('Login', ['$firebaseArray', 'Session', function($firebaseArray, Session){
	
	var ref = new Firebase("https://relaxio.firebaseio.com");
	var onLogin = [];
	
	return {
		logIn: function (email, password, callback) {
			ref.authWithPassword({
				email: email,
				password: password
			}, function (error, authData) {
				if (error) {
					alert("Incorrect login info - please try again");
				} else {				
					Session.setSessionInfo(authData);
					callback();
					
					for (var i = 0; i < onLogin.length; i++) {
						onLogin[i]();
					}
				}
			})
		},
		onLogin: function (callback) {
			if (Session.hasSessionInfo()) {
				callback();
			} else {
				onLogin.push(callback);
			}
		}

	}
}]);