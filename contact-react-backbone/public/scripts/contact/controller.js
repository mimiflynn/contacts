var contacts = contacts || {};

contacts.ListContacts = Backbone.View.extend({
  collection: new contacts.Contacts(),

  initialize: function () {
    var _this = this;

    this.collection.fetch({
      success: _.bind(_this.render, _this)
    });
  },

  render: function () {
    var data = {contacts: this.collection.toJSON()};
    console.log(data);
    React.render(React.createElement(CardList, data), document.getElementById('content')); 
    return this;
  }
});

