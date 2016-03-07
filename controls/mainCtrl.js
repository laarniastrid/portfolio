angular.module('myApp')

.controller('mainCtrl', function($scope) {

  // $scope.test = "this is a test";

  /* ----- nav top buttons */
  // home button
  $scope.homeVal = 'Home';
  $scope.homeIcon = 'fa fa-home fa-3x';
  $scope.homeRoute = 'home';

  // sketches button
  $scope.sketchVal = "Sketches";
  $scope.sketchIcon = "fa fa-paint-brush fa-3x";
  $scope.sketchRoute = "sketches";

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

// trying contact control here.controller('contactCtrl', function($scope) {

  // $scope.addPost = function(data) {
  //   $.ajax({
  //       url: "http://formspree.io/ecriyliz.yilrjsjy@gmail.com",
  //       method: "POST",
  //       data: {
  //         name: data.name,
  //         email: data.email,
  //         phone: data.phone,
  //         message: data.text,
  //       },
  //       dataType: "json"
  //   });
  //   // alert('there are bees!');
  //   console.log($scope.contact);
  //   $scope.contact = '';
  // }



}) // end mainCtrl
