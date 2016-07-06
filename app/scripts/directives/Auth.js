relaxIO.factory('Auth', ['$cookieStore', function($cookieStore) {
	
	var _user = {};
	
	return {
		
		user: _user,
		
		set: function (_user) {
			
			existing_cookie_user = $cookieStore.get('current.user');
			_user = _user || existing_cookie_user;
			$cookieStore.put('current.user', _user);
		},
		
		remove: function () {
			$cookieStore.remove('current.user', _user);
		}
	};
	
}]);