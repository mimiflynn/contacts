'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var ReactBb = new Module('react-bb');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
ReactBb.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  ReactBb.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  ReactBb.menus.add({
    title: 'reactBb example page',
    link: 'reactBb example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  ReactBb.aggregateAsset('css', 'reactBb.css');

  ReactBb.aggregateAsset('js', '../lib/js/bundle.js', {
    absolute: false,
    global: true
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    ReactBb.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    ReactBb.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    ReactBb.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return ReactBb;
});
