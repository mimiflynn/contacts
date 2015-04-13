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

var CardForm = React.createClass({displayName: "CardForm",
  handleSubmit: function (e) {
    e.preventDefault();
    console.log('cardform refs: ', this.refs);
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCardSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  },
  render: function () {
    return (
      React.createElement("form", {className: "cardForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "First", ref: "firstName"}), 
        React.createElement("input", {type: "text", placeholder: "Last", ref: "lastName"}), 
        React.createElement("input", {type: "text", placeholder: "Street Address", ref: "address"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

module.exports = {
  card: Card,
  cardList: CardList,
  cardForm: CardForm
};