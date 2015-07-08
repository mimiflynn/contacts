'use strict';

angular.module('mean.contacts', ['mean.system'])
  .config(['$viewPathProvider',
    function ($viewPathProvider) {
      $viewPathProvider.override('system/views/index.html', 'react-bb/views/index.html');
    }]);
