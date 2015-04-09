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
    var data = this.collection.at(0).attributes;
    console.log(data);

    React.render(React.createElement(Card, data), document.getElementById('content'));

    return this;
  }
});
