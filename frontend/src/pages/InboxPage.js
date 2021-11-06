import { React, Component } from 'react';
import { LayoutWithNavbar } from '../components';

class InboxPage extends Component {
  render() {
    return (
      <LayoutWithNavbar activeMenu="Inbox">
        <div>
          <h1>받은 메시지함</h1>
          <p>아직 미구현된 페이지입니다.</p>
        </div>
      </LayoutWithNavbar>
    );
  }
}

export default InboxPage;