var Card = React.createClass({displayName: "Card",
  render: function () {
    console.log('card props', this.props);
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

// https://facebook.github.io/react/docs/multiple-components.html

var CardList = React.createClass({displayName: "CardList",
  render: function () {
    console.log('cardlist props', this.props);
    
    var cards = this.props.contacts.map(function(contact, index) {
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