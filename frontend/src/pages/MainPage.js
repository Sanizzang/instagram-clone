import { React, Component } from 'react';
import TimelinePage from './TimelinePage';
import LoginPage from './LoginPage';

class MainPage extends Component {
  render() {
    let isLogged = true;
    return (
      <div>
        {isLogged ? <TimelinePage /> : <LoginPage />}
      </div>
    );
  }
}

export default MainPage;
