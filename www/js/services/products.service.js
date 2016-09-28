angular.module('store.products.service', [])
    .factory('ProductsService', ProductsService);

ProductsService.$inject = ['$http', '$log'];
function ProductsService($http, $log) {
    return {
        getProducts: getProducts,
        handleProducts: handleProducts
    };

    function getProducts() {
        return $http.get('http://localhost:3000/products')
        .then(function(response) {
            return response.data;
        })
        .catch(function(e) {
            $log.error('XHR Failed for getProducts: ' + e.data);
        });
    };

    function handleProducts(array, number) {
        var auxArray = [];

        array.map(function(obj) {
            return angular.extend(obj, {showDetails: false, qntCart: 0});
        });

        while(array.length > number) {
            auxArray.push(array.splice(0, number));
        }

        return auxArray;
    };
};
