angular.module('myApp')

.service('sketchesSvc', function($http) {

  // this.test = "this is a test";

  this.getSketches = function() {
    return $http({
      method: 'GET',
      url: './sketches/sketches.json'
    })
  }


}) // end service
