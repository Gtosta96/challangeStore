angular.module('store.multiply.filter', [])
.filter('stMultiply', multiply);

function multiply() {
		return function(content, multiplier) {
			return content*multiplier;
		};
};
