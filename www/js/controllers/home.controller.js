'use strict';

angular.module('store.home.controller', [])
	.controller('HomeController', HomeController);

HomeController.$inject = ['$log', 'ProductsService'];
function HomeController($log, ProductsService) {
	$log.log('HomeController loaded.');

	  var vm = this;
	  vm.items = [];

  	activateProducts();

  	function activateProducts() {
    	return ProductsService.getProducts()
  		.then(function(data) {
			var items = data.products;
			$log.log(items);
			while(items.length > 3) {
    			vm.items.push(items.splice(0, 3));
			}
      	});
	}
}
