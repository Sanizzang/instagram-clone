import { React, Component } from 'react';
import { HomeActiveIcon, DirectMessageIcon, UploadIcon, ExploreIcon, ActivityIcon } from '../assets/icons';
import Logo from '../assets/images/logo.png';
import ProfileImage from '../assets/images/profile.jpg';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div></div>
          <div className="navbar-menu">
            <a href="#!" className="navbar-link">
              <HomeActiveIcon />
            </a>
            <a href="/direct/inbox" className="navbar-link">
              <DirectMessageIcon />
            </a>
            <a href="/create/select" className="navbar-link">
              <UploadIcon />
            </a>
            <a href="/explore" className="navbar-link">
              <ExploreIcon />
            </a>
            <a href="/accounts/activity" className="navbar-link">
              <ActivityIcon />
            </a>
            <a href="#!" className="navbar-link">
              <img className="profile-image" src={ProfileImage} alt="profile" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;