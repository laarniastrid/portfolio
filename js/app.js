angular.module('myApp', ['ui.router', 'ngAnimate'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'mainCtrl',
    }) // end home

    .state('sketches', {
      url: '/sketches',
      templateUrl: 'views/sketches.html',
      controller: 'mainCtrl',
    }) // end skills

    .state('skills', {
      url: '/skills',
      templateUrl: 'views/skills.html',
      controller: 'mainCtrl',
    }) // end skills

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'mainCtrl',
    }) // end contact

    $urlRouterProvider.otherwise('/');
}) // end config
