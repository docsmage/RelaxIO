relaxIO.factory('Login', ['$firebaseArray', 'Session', '$firebaseAuth', '$q', function($firebaseArray, Session, $firebaseAuth, $q){
									
	// var ref = new Firebase("https://relaxio.firebaseio.com");
	var onLogin = [];
  var auth = $firebaseAuth();
							
	return {
		logIn: function (email, password) {
			
			var deferred = $q.defer();
			
			auth.$signInWithEmailAndPassword(email, password).then(
				function (authData) {
					Session.setSessionInfo(authData);
					deferred.resolve();
					}
				).catch(
				function (error) {
					alert("Login failed!" + error);
					deferred.reject();
				}
			)
		return deferred.promise;
		
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