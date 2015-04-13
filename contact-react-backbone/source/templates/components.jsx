var React = require('react');

var Card = React.createClass({
  render: function () {
    return (
      <div className="card">
        <h2 className="name">{this.props.data.firstName} {this.props.data.lastName}</h2>
        <div className="address">{this.props.data.address}</div>
        <div className="city">{this.props.data.city}</div>
        <div className="state">{this.props.data.state}</div>
        <div className="zip">{this.props.data.zip}</div>
        <div className="country">{this.props.data.country}</div>
      </div>
    );
  }
});

var CardList = React.createClass({
  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        <Card data={contact} key={index}>
        </Card>
      );
    });
    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
});

var CardForm = React.createClass({
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
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First" ref="firstName" />
        <input type="text" placeholder="Last" ref="lastName" />
        <input type="text" placeholder="Street Address" ref="address" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = {
  card: Card,
  cardList: CardList,
  cardForm: CardForm
};