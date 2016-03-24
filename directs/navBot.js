angular.module('myApp')

.directive('navBot', function() {

  return {
    restrict: 'E',
    templateUrl: 'views/navBot.html',
    // controller: 'mainCtrl',
    scope: {
      icon: '=',
      link: '='
    },
    link: function(scope, ele, attr) {
      ele.on('mouseover', function() {
        $('.icon-hover', this).css({
          'box-shadow': '0px 0px 20px #006699',
          'border-radius': '5px',
          'background': '#45A6D6',
        });
      })
      .on('mouseout', function() {
        $('.icon-hover', this).css({
          'box-shadow': 'none',
          'border-radius': 'none',
          'background': 'none',
        });
      });
    }

  };

}); // end of navDir
