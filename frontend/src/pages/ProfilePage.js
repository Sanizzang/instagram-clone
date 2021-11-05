import { React, Component } from 'react';
import { Navbar } from '../components';
import { NotFoundPage } from '.';

class ProfilePage extends Component {
  render() {
    let { username } = this.props.match.params;
    // 만약 username에 해당하는 사용자가 없다면
    // NotFoundPage를 보여준다.
    // 만약 username에 해당하는 사용자가 있다면
    // 해당 사용자의 프로필을 보여준다.

    if (username !== 'euijin.__') {
      return (
        <main>
          <Navbar />
          <NotFoundPage />
        </main>
      );
    }

    return (
      <main>
        <Navbar activeMenu="Profile" />
        <div>
          <h1>Profile Page</h1>
          <p>This is the {username}'s profile page</p>
        </div>
      </main>
    );
  }
}

export default ProfilePage;