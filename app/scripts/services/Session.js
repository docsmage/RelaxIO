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
		}
		
	};
});