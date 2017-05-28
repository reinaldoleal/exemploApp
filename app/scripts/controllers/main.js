'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */
angular.module('exampleApp')
  .controller('MainCtrl', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();

    $("#myCarousel").carousel();
  });
