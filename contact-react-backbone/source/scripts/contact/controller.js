var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('lodash');
var React = require('react');

var Collection = require('./collection.js');
var Model = require('./model.js');
var CardList = require('../templates/components.js').cardList;
var CardForm = require('../templates/components.js').cardForm;

module.exports = Backbone.View.extend({
  collection: new Collection(),

  initialize: function () {
    var _this = this;

    this.collection.fetch({
      success: _.bind(_this.renderList, _this)
    });

    this.listenTo(this.collection, 'add', this.renderList);

    this.render();
  },

  render: function () {
    this.renderList();

    var form = React.render(React.createElement(CardForm), document.getElementById('newCard'));
    React.findDOMNode(form).addEventListener('cardSubmit', _.bind(this.onCardSubmit, this));

    return this;
  },

  renderList: function () {
    var data = {contacts: this.collection.toJSON()};
    React.render(React.createElement(CardList, data), document.getElementById('content'));
  },

  onCardSubmit: function (e) {
    var formData = e.detail;
    var contact = new Model(formData);
    contact.save();
    this.collection.add([contact]);
  }
});
