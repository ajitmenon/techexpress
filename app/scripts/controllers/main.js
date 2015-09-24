'use strict';

/**
 * @ngdoc function
 * @name techexpressApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techexpressApp
 */
angular.module('techexpressApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
