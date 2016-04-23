var relaxIO = angular.module("relaxIO", ["ui.router", "firebase",  "ui.bootstrap", "ngCookies"])

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
      controller: 'MainController',
      templateUrl: '/templates/home.html'
	});
	
	$stateProvider.state('about', {
		url: '/about',
		controller: 'MainController',
		templateUrl: '/templates/about.html'
	});
	
	$stateProvider.state('feedback', {
		url: '/feedback',
		controller: 'MainController',
		templateUrl: '/templates/feedback.html'
	});	
	
	$stateProvider.state('saved', {
		url: '/saved',
		controller: 'MainController',
		templateUrl: '/templates/savedmixes.html'
	});		

	$stateProvider.state('signup', {
		url: '/signup',
		controller: 'SignUpCtrl',
		templateUrl: '/templates/signup.html'
	});
	
	$stateProvider.state('login', {
		url: '/login',
		controller: 'LogInCtrl',
		templateUrl: '/templates/login.html'
	});	
	
	$stateProvider.state('profile', {
		url: '/profile',
		controller: 'ProfileCtrl',
		templateUrl: '/templates/profile.html'
	});		
	
});