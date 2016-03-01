angular.module('myApp', ['ui.router', 'ngAnimate'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'mainCtrl',
      templateUrl: '../views/main.html',
    }) // end home


}) // end config
