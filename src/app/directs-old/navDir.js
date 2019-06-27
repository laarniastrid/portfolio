angular.module('myApp')

.directive('navDir', function() {

  return {
    restrict: 'E',
    templateUrl: 'views/navBar.html',
    scope: {
      link: '=',
      name: '=',
      icon: '='
    },
    link: function(scope, ele, attr) {
      ele.on('mouseover', function() {  // mouseover for icons
        $('.icon-hover', this).css({
          'box-shadow': '0px 0px 20px #006699',
          'border-radius': '5px',
          'background': '#45A6D6',
        })
      });

      ele.on('mouseout', function() { // mouseout for icons
        $('.icon-hover', this).css({
          'box-shadow': 'none',
          'border-radius': 'none',
          'background': 'none',
        })
      });
    } // end link
  }

}) // end of navDir
