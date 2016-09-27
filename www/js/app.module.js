'use strict';


angular.module('store',
	[
		'ionic',
		'store.routes',
		'store.home.controller',
		'store.products.service',
		'store.change.directive',
		'store.productDetail.directive'
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
