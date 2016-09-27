angular.module('store.productDetail.directive', [])
.directive('stProductDetail', productDetail);

function productDetail() {
	return {
		restrict: 'E',
		scope: {
			product: '='
		},
		templateUrl: 'js/directives/productDetail/productDetail.view.html'
	}
}
