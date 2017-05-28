(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name exampleApp.controller:ModalContractCtrl
   * @description
   * # ModalContractCtrl
   * Controller of the exampleApp
   */
  angular.module('exampleApp')
    .controller('ModalContractCtrl', function($scope, $uibModalInstance, entity) {
      $scope.contract = angular.copy(entity);
      $scope.contractBkp = angular.copy(entity);

      function init() {
        $scope.isSubmited = false;
        $scope.isNoChange = false;

        $scope.naturezaList = [{
            "name": "Compra"
          },
          {
            "name": "Venda"
          }
        ];
        $scope.statusList = [{
            "name": "Aprovado"
          },
          {
            "name": "Pendente"
          }
        ];
      }

      $scope.save = function() {
        if (JSON.stringify($scope.contract) === JSON.stringify($scope.contractBkp) && !$scope.isNoChange) {
          $scope.isNoChange = true;
        } else {
          if ($scope.isSubmited || $scope.isNoChange) {
            $uibModalInstance.close($scope.contract);
          } else {
            $scope.isSubmited = true;
          }
        }
      };

      $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
      };

      $scope.cancel = function() {
        $scope.isSubmited = false;
        $scope.isNoChange = false;
      }

      init();

      $(function() {
        $('.input-group.date').datepicker({
          format: 'dd-mm-yyyy',
          todayHighlight: true
        });
      })
    });
})();
