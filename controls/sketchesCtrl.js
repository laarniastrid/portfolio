angular.module('myApp')

.controller('sketchesCtrl', function($scope, sketchesSvc) {

  // $scope.test = sketchesSvc.test;
  $scope.sketches = [];
  $scope.theData = function() {
    sketchesSvc.getSketches().then(function(response) {
      $scope.myData = response.data;
      // console.log($scope.myData);
      $scope.myData.forEach(function(entry) {
        $scope.sketches.push(entry.path);
      })
      console.log($scope.sketches);
    })
  }
  $scope.theData();



}) // end sketchesCtrl
