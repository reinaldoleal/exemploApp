'use strict';

describe('Controller: ModalContractCtrl', function () {

  // load the controller's module
  beforeEach(module('suatiApp'));

  var ModalContractCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalContractCtrl = $controller('ModalContractCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalContractCtrl.awesomeThings.length).toBe(3);
  });
});
