import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileMenuItem extends Component {
  render() {
    let Icon = this.props.icon;
    let to = this.props.to;

    return (
      <Link to={to}>
        <div style={{ padding: "8px 16px", display: "flex" }}>
          { Icon &&
            <div style={{ marginRight: "12px", display: "flex" }}>
              { Icon && <Icon /> }
            </div>
          }
          <div>
            {this.props.text}
          </div>
        </div>
      </Link>
    );
  }
}

export default ProfileMenuItem;
