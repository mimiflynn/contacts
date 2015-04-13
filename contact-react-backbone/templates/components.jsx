var Card = React.createClass({
  render: function () {
    console.log('card props', this.props);
    return (
      <div className="card">
        <h2 className="name">{this.props.data.firstName} {this.props.lastName}</h2>
        <div className="address">{this.props.data.address}</div>
        <div className="city">{this.props.data.city}</div>
        <div className="state">{this.props.data.state}</div>
        <div className="zip">{this.props.data.zip}</div>
        <div className="country">{this.props.data.country}</div>
      </div>
    );
  }
});

// https://facebook.github.io/react/docs/multiple-components.html

var CardList = React.createClass({
  render: function () {
    console.log('cardlist props', this.props);
    
    var cards = this.props.contacts.map(function(contact, index) {
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
