'use strict';

angular.module('mean.contacts')
  .factory('Contact', ['$resource', function ($resource) {
    return $resource('contact/:contactId', {
      contactId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }]);
