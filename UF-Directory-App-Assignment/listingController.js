angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.newItem = '';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.newItem != '') {
        $scope.listings.push($scope.newItem);
        $scope.newItem = '';
      }
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      if ($scope.detailedInfo.coordinates === undefined) {
        $scope.detailedInfo.coordinates =  {
          "latitude": "N/A",
          "longitude":"N/A"
        };
      }
      if ($scope.detailedInfo.coordinates.latitude === undefined) {
        $scope.detailedInfo.coordinates.latitude =  "N/A"
      }
      if ($scope.detailedInfo.coordinates.longitude === undefined) {
        $scope.detailedInfo.coordinates.longitude =  "N/A"
      }
      if ($scope.detailedInfo.address === undefined) {
        $scope.detailedInfo.address = "N/A";
      }
      if ($scope.detailedInfo.code === undefined) {
        $scope.detailedInfo.code = "N/A";
      }
      if ($scope.detailedInfo.name === undefined) {
        $scope.detailedInfo.name = "N/A";
      }
    };
  }
]);