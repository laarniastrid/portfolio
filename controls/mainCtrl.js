angular.module('myApp')

.controller('mainCtrl', function($scope) {

  /* ----- nav top buttons */
  // home button
  $scope.homeVal = 'Home';
  $scope.homeIcon = 'fa fa-home fa-3x';
  $scope.homeRoute = 'home';

  // sketches button
  $scope.sketchVal = 'Sketches';
  $scope.sketchIcon = 'fa fa-paint-brush fa-3x';
  $scope.sketchRoute = 'sketches';

  // skills button
  $scope.skillsVal = 'Skills';
  $scope.skillsIcon = 'fa fa-gear fa-3x';
  $scope.skillsRoute = 'skills';

  // contact button
  $scope.contactVal = 'Contact';
  $scope.contactIcon = 'fa fa-envelope-o fa-3x';
  $scope.contactRoute = 'contact';

  /* nav bottom buttons */
  // github button
  $scope.gitIcon = 'fa fa-github-alt fa-3x';
  $scope.gitRoute = 'https://github.com/laarniastrid';

  // linkedin button
  $scope.linkedIcon = 'fa fa-linkedin fa-3x';
  $scope.linkedRoute = 'https://www.linkedin.com/in/laarniastrid';

  // twitter button
  $scope.twitIcon = 'fa fa-twitter fa-3x';
  $scope.twitRoute = 'https://twitter.com/laarniastrid';

  // youtube button
  $scope.youtubeIcon = 'fa fa-youtube-play fa-3x';
  $scope.youtRoute = 'https://www.youtube.com/user/HardsuitLoL';



}) // end mainCtrl
