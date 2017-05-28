'use strict';

/**
 * @ngdoc overview
 * @name exampleApp
 * @description
 * # exampleApp
 *
 * Main module of the application.
 */
angular
  .module('exampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.bootstrap',
	'ui.utils.masks'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contract', {
        templateUrl: 'views/contract.html',
        controller: 'ContractCtrl',
        controllerAs: 'contract'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
