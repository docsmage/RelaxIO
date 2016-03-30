relaxIO.factory("Session", function () {
	var sessionInfo = null;
	
	return {
		
		setSessionInfo: function (info) {
			sessionInfo = info;
		},
		
		hasSessionInfo: function () {
			return sessionInfo !== null;
		},
		
		getEmail: function () {
			return sessionInfo && sessionInfo.password.email || null;
		},
		
		getUserId: function () {
			return sessionInfo && sessionInfo.uid;
		},
		
		
		
		getMixes: function () { 
			// check firebase docs for retrieving data - since it's asynchronous, you may need a callback to return the data
			
		}
		
	};
});