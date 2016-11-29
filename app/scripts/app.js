var relaxIO = angular.module("relaxIO", ["ui.router",   "ui.bootstrap"])

// Removed , "ngCookies", "firebase"

//.run(
//	function($firebaseAuth, $rootScope, Session) {
//		
//		if (Session.hasSessionInfo()) {
//			$rootScope.isLoggedIn = true;
//		} else {
//			$rootScope.isLoggedIn = false;
//		}
//	}
//)

// config states & controllers
.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');
    // removes /!/ from URL

  $stateProvider.state('home', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: '/templates/home.html'
	});

	$stateProvider.state('about', {
		url: '/about',
		controller: 'MainCtrl',
		templateUrl: '/templates/about.html'
	});
//
//	$stateProvider.state('feedback', {
//		url: '/feedback',
//		controller: 'MainCtrl',
//		templateUrl: '/templates/feedback.html'
//	});
//
//	$stateProvider.state('saved', {
//		url: '/saved',
//		controller: 'MainCtrl',
//		templateUrl: '/templates/savedmixes.html'
//	});
//
//	$stateProvider.state('signup', {
//		url: '/signup',
//		controller: 'SignUpCtrl',
//		templateUrl: '/templates/signup.html'
//	});
//
//	$stateProvider.state('login', {
//		url: '/login',
//		controller: 'LogInCtrl',
//		templateUrl: '/templates/login.html'
//	});
//
//	$stateProvider.state('profile', {
//		url: '/profile',
//		controller: 'ProfileCtrl',
//		templateUrl: '/templates/profile.html'
//	});

});