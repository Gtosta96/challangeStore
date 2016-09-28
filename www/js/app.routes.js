'use strict';

angular.module('store.routes', ['ui.router'])
.config(config);

function config ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$urlRouterProvider.otherwise('/app/store');
	$ionicConfigProvider.views.transition('platform');

	$stateProvider
		.state('app', {
	    url: '/app',
	    abstract: true,
		cache: false,
	    templateUrl: 'js/views/cart.view.html',
		controller: 'CartController',
		controllerAs: 'vm'
	  })

	  .state('app.store', {
	    url: '/store',
	    views: {
	      'contentMenu': {
			  templateUrl: 'js/views/store.view.html',
	  		  controller: 'StoreController',
			  controllerAs: 'vm'
	      }
	    }
	});
};
