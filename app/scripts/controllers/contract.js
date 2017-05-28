(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name exampleApp.controller:ContractCtrl
   * @description
   * # ContractCtrl
   * Controller of the exampleApp
   */
  angular.module('exampleApp')
    .controller('ContractCtrl', function($scope, $rootScope, $location, $timeout, contractService, $uibModal) {
      $rootScope.activetab = $location.path();

      function init() {
        $scope.isSaved = false;

        $scope.name = 'Contracts';
        $scope.gridOptions = {
          enableSorting: true,
          enableFiltering: true,
          enableColumnMenus: true,
          enableGridMenu: true,
          enableRowSelection: true,
          enableRowHeaderSelection: false,
          showGridFooter: true,
          showColumnFooter: false,
          multiSelect: false,
          onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);

            gridApi.selection.on.rowSelectionChanged($scope, function(row) {
              $scope.isSaved = false;

              $uibModal.open({
                templateUrl: 'views/modal.contract.html',
                controller: 'ModalContractCtrl',
                size: 'lg',
                resolve: {
                  entity: row.entity
                }
              }).result.then(function(ret) {
                row.entity = ret;
                $scope.isSaved = true;
              });
            });
          },
          columnDefs: [{
              field: 'Código',
              width: 90,
              enableFiltering: true
            },
            {
              field: 'Data acordo comercial',
              width: 190,
              enableFiltering: true
            },
            {
              field: 'Natureza',
              width: 90,
              enableFiltering: true
            },
            {
              field: 'Comprador',
              width: 180,
              enableFiltering: true
            },
            {
              field: 'Vendedor',
              width: 180,
              enableFiltering: true
            },
            {
              field: 'Energia referência',
              width: 160,
              enableFiltering: true
            },
            {
              field: 'Energia entregue',
              width: 160,
              enableFiltering: true
            },
            {
              field: 'Status aprovação',
              width: 150,
              enableFiltering: true
            },
            {
              field: 'Modelo',
              width: 180,
              enableFiltering: true
            },
            {
              field: 'Preço base contratado',
              width: 190,
              enableFiltering: true
            },
            {
              field: 'Submercado',
              width: 150,
              enableFiltering: true
            },
            {
              field: 'Início fornecimento',
              width: 170,
              enableFiltering: true
            },
            {
              field: 'Fim fornecimento',
              width: 170,
              enableFiltering: true
            },
            {
              field: 'Início vigência',
              width: 170,
              enableFiltering: true
            },
            {
              field: 'Fim vigência',
              width: 170,
              enableFiltering: true
            }
          ]
        };
      }

      $scope.$watch('isSaved', function(newValue, oldValue) {
        if (newValue) {
          var timer = $timeout(function() {
            $scope.isSaved = false;
            $timeout.cancel(timer);
          }, 5000);
        }
      });

      $scope.filter = function() {
        $scope.gridApi.grid.refresh();
      };

      $scope.singleFilter = function(renderableRows) {
        var matcher = $scope.filterValue ? $scope.filterValue.toUpperCase() : "";
        renderableRows.forEach(function(row) {
          var match = false;
          $scope.gridOptions.columnDefs.forEach(function(field) {
            if (row.entity[field.field] && row.entity[field.field].toUpperCase().match(matcher)) {
              match = true;
            }
          });
          if (!match) {
            row.visible = false;
          }
        });
        return renderableRows;
      };

      contractService.getContracts().then(
        function success(response) {
          $scope.gridOptions.data = response.data.contracts;
        },
        function error(error) {
          $log.error(error);
        }
      );

      init();
    });
})();
