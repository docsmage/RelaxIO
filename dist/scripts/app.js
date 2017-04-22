var relaxIO = angular.module("relaxIO", ["ui.router", "ngRoute", "ui.bootstrap"])

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

});