angular.module('store.change.directive', [])
.directive('stChange', stChange);

stChange.$inject = ['$compile'];
function stChange($compile) {
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			var oldElHtml = element[0].querySelector('.product-description');
			var oldEl = angular.element(oldElHtml);
			var toggle = true;

			element.on('click', onclick);

			function onclick() {
				var product = scope.product;
				var newElCompile = $compile('<st-product-detail product="product"></st-product-detail>')(scope);
				var oldElCompile = $compile(oldElHtml)(scope);

				if(toggle) {
					oldElCompile.replaceWith(newElCompile)
					toggle = false;
				} else {
					newElCompile.replaceWith(oldElCompile);
					toggle = true;
				}
			};
		}
	}
}
