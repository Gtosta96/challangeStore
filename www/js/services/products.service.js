angular.module('store.products.service', [])
    .factory('ProductsService', ProductsService);

    ProductsService.$inject = ['$http', '$log'];

    function ProductsService ($http, $log) {
        return {
            getProducts: getProducts
        };

        function getProducts () {
            return $http.get('http://localhost:3000/products')
            .then(complete)
            .catch(error);
        }
        function complete (response) {
            return response.data;
        }
        function error (e) {
            $log.error('XHR Failed for getProducts: '+ e.data);
        }

    }
