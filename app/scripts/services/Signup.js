relaxIO.factory('Signup', ['$firebaseArray', function($firebaseArray){
	
	var ref = new Firebase("https://relaxio.firebaseio.com");
	
	var isNewUser = true;

	return {
		signUp: function (email, password, callback) {
			ref.createUser({
				email: email,
				password: password
			}, function(error, userData) {
				if (error) {
					alert("Error signing up - please try again");
				} else {
					callback(userData);
				}
			});
		}
	
	}
}]);