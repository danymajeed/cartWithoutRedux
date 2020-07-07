import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Cart</span>
        {this.checkItems()}
      </nav>
    );
  }

  checkItems() {
    if (this.props.totalItems !== 0)
      return (
        <h4>
          <span className="badge badge-secondary badge-pill badge-lg">
            {this.props.totalItems}
          </span>
        </h4>
      );
  }
}

export default Navbar;
