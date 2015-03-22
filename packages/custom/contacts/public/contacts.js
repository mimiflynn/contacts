'use strict';

angular.module('mean.contacts', ['mean.system'])
  .config(['$viewPathProvider',
    function ($viewPathProvider) {
      $viewPathProvider.override('system/views/index.html', 'contacts/views/index.html');
    }]);
