angular.module('myApp')

.directive('circlesDir', function() {

  return {
    restrict: 'E',
    templateUrl: 'views/circles.html',
    controller: function($scope) {
       $scope.whalesSite = function() {
        //  href='http://laarniastrid.com/noServer';
        window.location.href = 'http://laarniastrid.com/noServer';
       }
    }
  }


}) // end circlesDir
