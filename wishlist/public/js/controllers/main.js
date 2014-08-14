angular.module('wishlistController', [])
	// inject the Wishlist service factory into our controller
	.controller('mainController', ['$scope','$http','wishlist', function($scope, $http, wishlist) {
			$scope.formData = {};
			$scope.loading = true;
			// GET =====================================================================
			// when landing on the page, get all wishlist items and show them
			// use the service to get all the wishlist items
			wishlist.get()
				.success(function(data) {
							$scope.wishlist = data;
							$scope.loading = false;}
						);
				
			// CREATE ==================================================================
			// when submitting the add form, send the text to the node API
			$scope.createWish = function() {
						$scope.loading = true;
						// validate the formData to make sure that something is there
						// if form is empty, nothing will happen
				//		if ($scope.formData.text != undefined) {
							// call the create function from our service (returns a promise object)
							wishlist.create($scope.formData)
							// if successful creation, call our get function to get all the new wishlist
							.success(function(data) {
									$scope.loading = false;
									$scope.formData = {}; // clear the form so our user is ready to enter another
									$scope.wishlist = data; // assign our new list of wishlist
							});
				//		}
			};
			
			// DELETE ==================================================================
			// delete a wishlist item after checking it
			$scope.deleteWish = function(id) {
						$scope.loading = true;
						wishlist.delete(id)
						// if successful creation, call our get function to get all the new wishlist
						.success(function(data) {
							$scope.loading = false;
							$scope.wishlist = data; // assign our new list of wishlist
						});
			};
	}]);