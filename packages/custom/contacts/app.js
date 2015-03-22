'use strict';

var Module = require('meanio').Module;

var Contacts = new Module('contacts');

Contacts.register(function (app, auth, database) {

  Contacts.routes(app, auth, database);

  Contacts.aggregateAsset('css', 'contacts.css');

  Contacts.aggregateAsset('js', '../lib/country-region-selector/source/jquery.crs.js', {
    absolute: false,
    global: true
  });

  return Contacts;
});
