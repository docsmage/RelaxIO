relaxIO.factory('Signup', ['$firebaseArray', function($firebaseArray){
	
	// TODO: Remove window.ref
	var ref = window.ref = new Firebase("https://relaxio.firebaseio.com");
	
	var isNewUser = true;

	return {
		signUp: function (email, password, callback) {
			ref.createUser({
				email: email,
				password: password
			}, function(error, userData) {
				if (error) {
					console.log("Error creating user:", error);
				} else {
					callback(userData);
					console.log("Successfully created user account with uid:", userData.uid);
				}
			});
		}
	
	}
}]);