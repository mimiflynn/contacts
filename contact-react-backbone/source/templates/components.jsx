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
    var contact = {
      firstName: React.findDOMNode(this.refs.firstName).value.trim(),
      lastName: React.findDOMNode(this.refs.lastName).value.trim()
    };
    this.onFormSubmit(contact);
    React.findDOMNode(this.refs.firstName).value = '';
    React.findDOMNode(this.refs.lastName).value = '';
  },
  onFormSubmit: function (data) {
    var event = new CustomEvent('cardSubmit', {detail: data});
    React.findDOMNode(this).dispatchEvent(event);
  },
  render: function () {
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First" ref="firstName" />
        <input type="text" placeholder="Last" ref="lastName" />
        <input type="text" placeholder="Street Address" ref="address" />
        <input type="text" placeholder="City" ref="city" />
        <input type="text" placeholder="State" ref="state" />
        <input type="text" placeholder="Zip" ref="zip" />
        <input type="text" placeholder="Phone" ref="phone" />
        <input type="text" placeholder="Email" ref="email" />
        <input type="submit" value="Save" />
      </form>
    );
  }
});

module.exports = {
  card: Card,
  cardList: CardList,
  cardForm: CardForm
};