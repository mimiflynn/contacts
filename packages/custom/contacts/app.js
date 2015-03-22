'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Contacts = new Module('contacts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Contacts.register(function (app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Contacts.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Contacts.menus.add({
    title: 'contacts example page',
    link: 'contacts example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Contacts.aggregateAsset('css', 'contacts.css');

  Contacts.aggregateAsset('js', '../lib/country-region-selector/source/crs.min.js', {
    absolute: false,
    global: true
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Contacts.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Contacts.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Contacts.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Contacts;
});
