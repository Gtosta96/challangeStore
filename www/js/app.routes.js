'use strict';

angular

.module('store.routes', [
	'ui.router'
])
.config(config);

function config ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$urlRouterProvider.otherwise('/');
	$ionicConfigProvider.views.transition('platform');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'js/views/home.view.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
}
