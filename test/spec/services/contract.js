'use strict';

describe('Service: contract', function () {

  // load the service's module
  beforeEach(module('suatiApp'));

  // instantiate service
  var contract;
  beforeEach(inject(function (_contract_) {
    contract = _contract_;
  }));

  it('should do something', function () {
    expect(!!contract).toBe(true);
  });

});
