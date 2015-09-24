'use strict';

/**
 * @ngdoc function
 * @name techexpressApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the techexpressApp
 */
angular.module('techexpressApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
