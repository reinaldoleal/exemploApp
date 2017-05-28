(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name exampleApp.contract
   * @description
   * # contract
   * Service in the exampleApp.
   */
  angular.module('exampleApp')
    .service('contractService', function ($http) {

      this.getContracts = function() {
          return $http.get('mocks/contracts.json');
      };
    });
})();
