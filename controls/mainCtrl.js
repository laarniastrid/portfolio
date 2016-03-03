angular.module('myApp')

.controller('mainCtrl', function($scope) {

  // $scope.test = "this is a test";

  /* ----- nav top buttons */
  // home button
  $scope.homeVal = 'Home';
  $scope.homeIcon = 'fa fa-home fa-3x';
  $scope.homeRoute = 'home';

  // skills button
  $scope.skillsVal = "Skills";
  $scope.skillsIcon = "fa fa-gear fa-3x";
  $scope.skillsRoute = "skills";

  // contact button
  $scope.contactVal = "Contact";
  $scope.contactIcon = "fa fa-envelope-o fa-3x";
  $scope.contactRoute = "contact";

  /* nav bottom buttons */
  // github button
  // $scope.gitVal = "Github";
  $scope.gitIcon = "fa fa-github-alt fa-3x";
  $scope.gitRoute = "home";

  // linkedin button
  // $scope.linkedVal = "LinkedIn";
  $scope.linkedIcon = "fa fa-linkedin fa-3x";
  $scope.linkedRoute = "home";

  // twitterbutton
  // $scope.twitVal = "Twitter";
  $scope.twitIcon = "fa fa-twitter fa-3x";
  $scope.twitRoute = "home";


}) // end mainCtrl
