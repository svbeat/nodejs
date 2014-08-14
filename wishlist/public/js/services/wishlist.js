
angular.module('wishlistService', [])
	// super simple service
	// each function returns a promise object
	.factory('wishlist', ['$http',function($http) {
			return {
				get : function() {
							return $http.get('/api/wishlist');
						},
				create : function(wishlistData) {
							return $http.post('/api/wishlist', wishlistData);
						},
				delete : function(id) {
							return $http.delete('/api/wishlist/' + id);
						}
			}
	}]);