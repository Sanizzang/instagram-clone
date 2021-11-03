import { React, Component } from 'react';
import Navbar from '../components/Navbar';

class InboxPage extends Component {
  render() {
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

export default InboxPage;