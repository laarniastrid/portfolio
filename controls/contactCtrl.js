angular.module('myApp')

.controller('contactCtrl', function($scope) {

  $scope.addPost = function(data) {
    $.ajax({
        url: "http://formspree.io/laarni.astrid@gmail.com",
        method: "POST",
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.text,
        },
        dataType: "json"
    });
    $scope.contact = '';
  }

}) // end of contactCtrl
