var relaxIO = angular.module("relaxIO", ["ui.router"])

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

});