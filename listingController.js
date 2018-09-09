angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        code:$scope.listings.newCode,
        name:$scope.listings.newName,
        coordinates: {
          latitude:$scope.listings.newLatitude,
          longitude:$scope.listings.newLongitude
        },
        address:$scope.listings.newAddress
      });

      $scope.listings.newCode = '';
      $scope.listings.newName = '';
      $scope.listings.newLatitude = '';
      $scope.listings.newLongitude = '';
      $scope.listings.newAddress = '';
    };
    $scope.deleteListing = function(index) {
      var removeObj = $scope.listings.indexOf(index);
      $scope.listings.splice(removeObj, 1);
    };
    $scope.showDetails = function(index) {
      $scope.details = $scope.listings[$scope.listings.indexOf(index)];
    };
  }
]);