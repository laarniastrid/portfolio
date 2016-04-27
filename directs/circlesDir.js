angular.module('myApp')

.directive('circlesDir', function() {

  return {
    restrict: 'E',
    templateUrl: 'views/circles.html',
    controller: function($scope) {
      $scope.whalesSite = function() {
        window.open('http://laarniastrid.com/noServer');
      }

      $scope.precourseSite = function() {
        window.open('http://precourse.herokuapp.com');
      }

      $scope.trollemSite = function() {
        window.open('http://trollem.herokuapp.com');
      }
    }
  }

}) // end circlesDir
