angular.module('myApp', ['ui.router', 'ngAnimate'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'mainCtrl',
      templateUrl: '../views/main.html',
    }) // end home

    .state('skills', {
      url: '/skills',
      templateUrl: '../views/skills.html',
    }) // end skills

    .state('contact', {
      url: 'contact',
      templateUrl: '../views/contact.html',
    }) // end contact

    $urlRouterProvider.otherwise('/');
}) // end config
