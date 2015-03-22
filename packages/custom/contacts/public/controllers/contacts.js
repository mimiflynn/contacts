'use strict';

angular.module('mean.contacts')
  .controller('ContactsController', ['$scope', '$location', '$stateParams', 'Contact',
    function ($scope, $location, $stateParams, Contact) {

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

      $scope.init = function () {
        $scope.contact = {};
        getContacts();
        if ($stateParams.contactId) {
          getContact();
        }
      };

      $scope.saveContact = function (contact) {
        if ($stateParams.contactId) {
          updateContact.call(this, contact);
        } else {
          createContact.call(this, contact);
        }
        getContacts();
      };
    }]);
