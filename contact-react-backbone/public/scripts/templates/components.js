var Card = React.createClass({displayName: "Card",
  render: function () {
    return (
      React.createElement("div", {className: "card"}, 
        React.createElement("h2", {className: "name"}, this.props.firstName, " ", this.props.lastName), 
        React.createElement("div", {className: "address"}, this.props.address), 
        React.createElement("div", {className: "city"}, this.props.city), 
        React.createElement("div", {className: "state"}, this.props.state), 
        React.createElement("div", {className: "zip"}, this.props.zip), 
        React.createElement("div", {className: "country"}, this.props.country)
      )
    );
  }
});
