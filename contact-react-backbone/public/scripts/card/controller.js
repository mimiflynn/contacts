var contacts = contacts || {};

contacts.ListContacts = Backbone.View.extend({
  collection: new contacts.Contacts(),

  initialize: function () {
    this.collection.fetch();
    this.render();
  },

  render: function () {
    if (this.collection.length) {
      console.log('all Contacts', this.collection);
    }

    React.render(React.createElement(Card, null), document.getElementById('content'));

    return this;
  }
});
