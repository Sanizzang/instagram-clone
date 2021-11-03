import { React, Component } from 'react';
import { Navbar } from '../components';
// import { NotFoundPage } from '.';

class ProfilePage extends Component {
  render() {
    // let { username } = this.props.match.params;
    // 만약 username에 해당하는 사용자가 없다면
    // NotFoundPage를 보여준다.
    // 만약 username에 해당하는 사용자가 있다면
    // 해당 사용자의 프로필을 보여준다.

    return (
      <main>
        <Navbar activeMenu="Inbox" />
        <div>
          <h1>Inbox Page</h1>
          <p>This is the inbox page</p>
        </div>
      </main>
    );
  }
}

export default ProfilePage;