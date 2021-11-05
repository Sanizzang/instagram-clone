import { React, Component } from 'react';
import { TimelinePage, LoginPage } from '.';

class MainPage extends Component {
  render() {
    if (localStorage.getItem('token') || 'DEBUG') {
      return <TimelinePage />;
    }

    return <LoginPage />;
  }
}

export default MainPage;
