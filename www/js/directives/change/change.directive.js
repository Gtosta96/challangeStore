angular.module('store.change.directive', [])
.directive('stChange', stChange);

stChange.$inject = ['ProductsService'];
function stChange(ProductsService) {
	return {
		restrict: 'E',
		scope: {
			source: '=',
			columns: '@',
			callback: '&callback'
		},
		link: function(scope, element, attributes) {
			scope.items = handleProducts(scope.source, scope.columns);
			scope.toggleDetails = toggleDetails;
			scope.setCallback = setCallback;

			function handleProducts(array, number) {
				return ProductsService.handleProducts(array, number);
			};

			function toggleDetails(product) {
				product.showDetails = !product.showDetails;
			};

			function setCallback(product) {
				scope.callback({product: product});
			}
		},
		templateUrl: 'js/directives/change/change.view.html'
	}
}
