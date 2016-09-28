angular.module('store.cart.service', [])
.factory('CartService', cartService);

cartService.$inject = ['$log', 'StorageService'];
function cartService($log, StorageService) {
	const CART_KEY = 'cart';
	return {
		add: add,
		remove: remove,
		getCart: getCart,
		clear: clear
	};

	function add(product) {
		//StorageService.destroy(CART_KEY);
		var cart = StorageService.get(CART_KEY) || {};

		var productInCart = cart[product.id];
		if(productInCart) {
			productInCart.qntCart++;
		} else {
			product.qntCart = 1;
			cart[product.id] = product;
		}

		StorageService.set(CART_KEY, cart);
	};

	function getCart() {
		return StorageService.get(CART_KEY);
	}

	function remove(key) {
 	   var cart = StorageService.get(CART_KEY);

	   if(!cart) {
		   $log.log('Carrinho vazio');
		   return;
	   }

	   var product = cart[key];
	   if(product && product.qntCart > 1) {
		   product.qntCart--;
	   } else {
		   //TODO.
			//StorageService.destroy(cart[key]);
	   }
   };

   function clear(key) {
	   return localStorage.removeItem(CART_KEY);
   };
};
