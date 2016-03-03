angular.module('myApp')

.directive('navDir', function() {

  return {
    restrict: 'E',
    templateUrl: '../views/navBar.html',
    // controller: 'mainCtrl',
    scope: {
      link: '=',
      name: '=',
      icon: '='
    }

  }

}) // end of navDir
