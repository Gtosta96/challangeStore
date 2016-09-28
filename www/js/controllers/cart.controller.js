'use strict';

angular.module('store.cart.controller', [])
	.controller('CartController', CartController);

CartController.$inject = ['$log', 'CartService'];
function CartController($log, CartService) {
	$log.log('CartController loaded.');

	  var vm = this;
	  vm.products = CartService.getCart();

	  vm.total = 0;
	  var product;
	  for(var index in vm.products) {
		  product = vm.products[index];
		  vm.total += product.price * product.qntCart;
	  }
  };
