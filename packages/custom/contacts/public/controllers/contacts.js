'use strict';

angular.module('mean.contacts')
  .controller('ContactsController', ['$scope', '$location', '$stateParams', 'Contact', 'Global',
    function ($scope, $location, $stateParams, Contact, Global) {

      var crs = new Crs();
      
      var getContacts = function () {
        Contact.query(function (contacts) {
          $scope.contacts = contacts;
        });
      };

      var getContact = function () {
        Contact.get({
          contactId: $stateParams.contactId
        }, function (contact) {
          $scope.contact = contact;
        });
      };

      var createContact = function () {
        var newContact = this.contact;

        if (this.contactForm.$valid) {
          var contact = new Contact(newContact);
          contact.$save(function () {
            $location.path('/');
          });
          this.contact = {};
        } else {
          $scope.submitted = true;
        }
      };

      var updateContact = function () {
        if (this.contactForm.$valid) {
          var contact = $scope.contact;
          if (!contact.updated) {
            contact.updated = [];
          }
          contact.updated.push(new Date().getTime());

          contact.$update(function () {
            $location.path('/');
          });
        } else {
          $scope.submitted = true;
        }
      };

      $scope.submitted = false;
      $scope.global = Global;

      $scope.init = function () {
        $scope.contact = {};
        getContacts();
        if ($stateParams.contactId) {
          getContact();
        }
        crs.init();
      };

      $scope.saveContact = function (contact) {
        if ($stateParams.contactId) {
          updateContact.call(this, contact);
        } else {
          createContact.call(this, contact);
        }
        getContacts();
      };

      $scope.remove = function (contact) {
        $scope.contact = contact;

        if (contact) {
          contact.$remove(function (response) {
            getContacts();
          });
        } else {
          $scope.contact.$remove();
        }
        $location.path('/');
      };
    }]);
