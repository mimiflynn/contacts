var Card = React.createClass({
  render: function () {
    return (
      <div className="card">
        <h2 className="name">{this.props.firstName} {this.props.lastName}</h2>
        <div className="address">{this.props.address}</div>
        <div className="city">{this.props.city}</div>
        <div className="state">{this.props.state}</div>
        <div className="zip">{this.props.zip}</div>
        <div className="country">{this.props.country}</div>
      </div>
    );
  }
});
