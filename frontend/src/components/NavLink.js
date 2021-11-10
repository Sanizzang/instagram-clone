import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.to} style={{}} onClick={this.props.onClick}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavLink;
