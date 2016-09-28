angular.module('store.cart.controller', [])
.controller('CartController', CartController);

CartController.$inject = ['$log', '$scope', '$ionicSideMenuDelegate', 'CartService'];
function CartController($log, $scope, $ionicSideMenuDelegate, CartService) {
	$log.log('CartController loaded.');

	var vm = this;
	vm.products;
	vm.total;
	vm.clearCart = clearCart;

	$scope.$watch(menuIsOpen, menuIsOpenCallback);

	function menuIsOpen() {
		return $ionicSideMenuDelegate.isOpenRight();
	};

	function menuIsOpenCallback(isOpen) {
		if(!isOpen) return;

		vm.products = CartService.getCart();
		vm.total = 0;
		var product;
		for (var index in vm.products) {
			product = vm.products[index];
			vm.total += product.price * product.qntCart;
		}
	};

	function clearCart() {
		CartService.clear();
		$ionicSideMenuDelegate.toggleRight();
	};
};
