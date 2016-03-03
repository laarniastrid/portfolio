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
    },
    link: function(scope, ele, attr) {
      ele.on('mouseover', function() {
        $('.icon-hover', this).css({
          'box-shadow': '0px 0px 20px #006699',
          'border-radius': '5px',
        })
      })
      ele.on('mouseout', function() {
        $('.icon-hover', this).css({
          'box-shadow': 'none',
          'border-radius': 'none',
        })
      })
    }

  }

}) // end of navDir
