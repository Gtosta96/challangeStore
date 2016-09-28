angular.module('store.divide.filter', [])
.filter('stDivide', divide);

function divide() {
		return function(content, divisor) {
			return content/divisor;
		};
};
