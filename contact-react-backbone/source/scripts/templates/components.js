var React = require('react');

var Card = React.createClass({displayName: "Card",
  render: function () {
    return (
      React.createElement("div", {className: "card"}, 
        React.createElement("h2", {className: "name"}, this.props.data.firstName, " ", this.props.data.lastName), 
        React.createElement("div", {className: "address"}, this.props.data.address), 
        React.createElement("div", {className: "city"}, this.props.data.city), 
        React.createElement("div", {className: "state"}, this.props.data.state), 
        React.createElement("div", {className: "zip"}, this.props.data.zip), 
        React.createElement("div", {className: "country"}, this.props.data.country)
      )
    );
  }
});

var CardList = React.createClass({displayName: "CardList",
  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        React.createElement(Card, {data: contact, key: index}
        )
      );
    });
    return (
      React.createElement("div", {className: "cardList"}, 
        cards
      )
    );
  }
});

/* CardForm
  upon submit will fire a JS CustomEvent() of 'cardSubmit' loaded with data
  be sure to add an event listener like so:

  React.findDOMNode(form).addEventListener('cardSubmit', callback)
  var callback = function (e) {
    // the data is in the detail
    console.log('cardSubmit fired: ', e.detail);
  }
*/

var CardForm = React.createClass({displayName: "CardForm",
  handleSubmit: function (e) {
    e.preventDefault();

    var _this = this;
    var contact = {};
    var keys = Object.keys(this.refs);

    // build the contact object out of the form data
    // to send to the app controller
    keys.forEach(function (e, i, a) {
      contact[e] = React.findDOMNode(_this.refs[e]).value.trim();
    });

    this.onFormSubmit(contact);
    React.findDOMNode(this.refs.firstName).value = '';
    React.findDOMNode(this.refs.lastName).value = '';
  },

  onFormSubmit: function (data) {
    var event = new CustomEvent('cardSubmit', {detail: data}, false);
    React.findDOMNode(this).dispatchEvent(event);
  },

  render: function () {
    return (
      React.createElement("form", {className: "cardForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "First", ref: "firstName"}), 
        React.createElement("input", {type: "text", placeholder: "Last", ref: "lastName"}), 
        React.createElement("input", {type: "text", placeholder: "Street Address", ref: "address"}), 
        React.createElement("input", {type: "text", placeholder: "City", ref: "city"}), 
        React.createElement("input", {type: "text", placeholder: "State", ref: "state"}), 
        React.createElement("input", {type: "text", placeholder: "Zip", ref: "zip"}), 
        React.createElement("input", {type: "text", placeholder: "Country", ref: "country"}), 
        React.createElement("input", {type: "text", placeholder: "Phone", ref: "phone"}), 
        React.createElement("input", {type: "text", placeholder: "Email", ref: "email"}), 
        React.createElement("input", {type: "submit", value: "Save"})
      )
    );
  }
});

module.exports = {
  card: Card,
  cardList: CardList,
  cardForm: CardForm
};