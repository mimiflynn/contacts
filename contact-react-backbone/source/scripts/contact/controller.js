var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('lodash');
var React = require('react');

var Collection = require('./collection.js');
var CardList = require('../templates/components.js').cardList;
var CardForm = require('../templates/components.js').cardForm;

module.exports = Backbone.View.extend({
  collection: new Collection(),

  initialize: function () {
    var _this = this;

    this.collection.fetch({
      success: _.bind(_this.render, _this)
    });
  },

  render: function () {
    var data = {contacts: this.collection.toJSON()};
    React.render(React.createElement(CardList, data), document.getElementById('content'));
    React.render(React.createElement(CardForm, data), document.getElementById('newCard'));
    return this;
  }
});
