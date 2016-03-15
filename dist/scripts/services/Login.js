relaxIO.factory('Login', ['$firebaseArray', function($firebaseArray){
	
	// TODO: Remove window.ref
	var ref = window.ref = new Firebase("https://relaxio.firebaseio.com");
	
	return {
		logIn: function (email, password, callback) {
			ref.authWithPassword({
				email: email,
				password: password
			}, function (error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					console.log("Authenticated successfully with payload:", authData);
				}
			})
		}

	}
}]);