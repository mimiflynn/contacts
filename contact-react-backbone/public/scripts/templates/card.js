var Card = React.createClass({displayName: "Card",
  render: function () {
    return (
      React.createElement("div", {className: "card"}, 
        React.createElement("h2", {className: "name"}, "First Last"), 
        React.createElement("div", {className: "address"}, "Address"), 
        React.createElement("div", {className: "city"}, "City")
      )
    );
  }
});