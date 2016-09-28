'use strict';

angular.module('store.store.controller', [])
	.controller('StoreController', StoreController);

StoreController.$inject = ['$log', 'ProductsService', 'CartService'];
function StoreController($log, ProductsService, CartService) {
	$log.log('StoreController loaded.');

	  var vm = this;
	  vm.products = [];
	  vm.cart = [];
	  vm.addToCartCallback = addToCartCallback;

  	getProducts();

  	function getProducts() {
    	return ProductsService.getProducts()
  		.then(function(data) {
			vm.products = data.products;
			$log.log(vm.products);
      	});
	};

	function addToCartCallback(product) {
		CartService.add(product);
	};
};
