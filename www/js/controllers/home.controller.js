'use strict';

angular.module('store.home.controller', [])
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$log', 'ProductsService'];

    function HomeController ($log, ProductsService) {
				$log.log('HomeController loaded.');

        var vm = this;
        vm.products = [];

        activateProducts();

        function activateProducts() {
            return ProductsService.getProducts()
              .then(function (data){
                  vm.products = data;
                  return vm.products;
              });
        }
    }
