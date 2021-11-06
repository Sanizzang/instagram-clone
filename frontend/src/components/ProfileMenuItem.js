import { React, Component } from 'react';

class ProfileMenuItem extends Component {
  render() {
    let Icon = this.props.icon;

    return (
      <div>
        { Icon && <Icon /> }
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default ProfileMenuItem;
