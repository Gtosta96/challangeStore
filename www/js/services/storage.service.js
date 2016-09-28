angular.module('store.storage.service', [])
.factory('StorageService', storageService);

function storageService() {
	return {
		set: set,
		get: get,
		destroy: destroy
	};

	function set(key, value) {
   		return localStorage.setItem(key, angular.toJson(value));
	};

	function get(key) {
	   return angular.fromJson(localStorage.getItem(key));
   };

   function destroy(key) {
	   return localStorage.removeItem(key);
   };
};
