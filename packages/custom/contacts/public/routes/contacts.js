'use strict';

angular.module('mean.contacts').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('create contact', {
        url: '/',
        templateUrl: 'contacts/views/index.html'
      })
      .state('edit contact', {
        url: '/contact/:contactId/edit',
        templateUrl: 'contacts/views/index.html'
      })
      .state('contact details', {
        url: '/contact/:contactId',
        templateUrl: 'contacts/views/contact.html'
      });
  }]);
