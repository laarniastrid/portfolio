angular.module('myApp')

.controller('sketchesCtrl', function($scope, sketchesSvc) {

  $scope.sketches = [];
  $scope.theData = function() {
    sketchesSvc.getSketches().then(function(response) {
      $scope.myData = response.data;
      $scope.myData.forEach(function(entry) {
        $scope.sketches.push(entry.path);
      });
    });
  };
  $scope.theData();

  // ----------- show/hide modal ---------- //
  $scope.showModal = false;
  $scope.modalToggle = function(input) {
    if (input) {
      $scope.modalImage = input;
    }
    $scope.showModal = !$scope.showModal;
  };

}); // end sketchesCtrl
