'use strict';


angular.module('store',
	[
		'ionic',
		'store.routes',

		'store.cart.controller',
		'store.store.controller',

		'store.products.service',
		'store.cart.service',
		'store.storage.service',
		'store.utils.service',

		'store.change.directive',

		'store.divide.filter',
		'store.multiply.filter'
	]).run(run);

function run($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
