var contacts = contacts || {};

contacts.Contacts = Backbone.Collection.extend({
  model: contacts.Contact,

  url: 'http://localhost:4000/contact',
  initialize: function () {
    console.log('collection!');
  }
});
