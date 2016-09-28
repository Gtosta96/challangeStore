'use strict';

angular.module('store.home.controller', [])
	.controller('HomeController', HomeController);

HomeController.$inject = ['$log', 'ProductsService', 'CartService'];
function HomeController($log, ProductsService, CartService) {
	$log.log('HomeController loaded.');

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
		//CartService.add(product);
		CartService.remove(product.id);
	};
};
