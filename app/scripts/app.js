'use strict';

angular.module('bandStalkerApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/greeting.html',
        controller: 'GreetingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
