
angular.module('ngSeed', [
  'ngRoute',
  'ngSeed.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/ng-seed/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
