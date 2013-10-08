'use strict';

angular.module('bandStalkerApp')
  .controller('GreetingCtrl', function($scope) {
    $scope.greetings = {
      loggedOut: 'Welcome to The Bandstalker!',
      loggedIn: 'Welcome back to The Bandstalker!'
    };
    $scope.messages = {
      loggedOut: 'Sign up to experience the best music site on the internet!',
      loggedIn: 'Are you ready to rock?!'
    };
  });
