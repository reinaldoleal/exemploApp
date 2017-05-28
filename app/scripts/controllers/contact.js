(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name exampleApp.controller:ContactCtrl
   * @description
   * # ContactCtrl
   * Controller of the exampleApp
   */
  angular.module('exampleApp')
    .controller('ContactCtrl', function($scope, $rootScope, $location) {
      $rootScope.activetab = $location.path();

      function init() {
        $scope.name = "Contact Form";
        $scope.isSent = false;
      }

      $scope.send = function() {
        $scope.isSent = true;
        $scope.contact = {};
      }

      init();
    });
})();
