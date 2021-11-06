import { React, Component } from 'react';
import { LayoutWithNavbar } from '../components';
import { NotFoundPage } from '.';

class ProfilePage extends Component {
  render() {
    let { username } = this.props.match.params;

    if (username !== 'euijin.__') {
      return (
        <LayoutWithNavbar>
          <NotFoundPage />
        </LayoutWithNavbar>
      );
    }

    return (
      <LayoutWithNavbar activeMenu="Profile">
        <div>
          <h1>Profile Page</h1>
          <p>This is the {username}'s profile page</p>
        </div>
      </LayoutWithNavbar>
    );
  }
}

export default ProfilePage;
