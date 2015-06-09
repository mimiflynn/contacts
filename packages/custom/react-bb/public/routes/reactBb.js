'use strict';

angular.module('mean.react-bb').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('reactBb example page', {
      url: '/reactBb/example',
      templateUrl: 'react-bb/views/index.html'
    });
  }
]);
