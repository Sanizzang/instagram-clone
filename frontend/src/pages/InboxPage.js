import { React, Component } from 'react';
import Navbar from '../components/Navbar';

class InboxPage extends Component {
  render() {
    return (
      <main>
        <Navbar activeMenu="Inbox" />
        <div>
          <h1>받은 메시지함</h1>
          <p>아직 미구현된 페이지입니다.</p>
        </div>
      </main>
    );
  }
}

export default InboxPage;