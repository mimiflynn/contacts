var React = require('react');
var Card = require('./card');

module.exports = React.createClass({
  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        <Card data={contact} key={index}/>
      );
    });
    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
});
