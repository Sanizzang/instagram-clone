import { React, Component } from 'react';
import { NavigationBarIcons } from '../assets/icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import ProfileImage from '../assets/images/profile.jpg';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: this.props.activeMenu,
      profileImage: ProfileImage
    };
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={function(e) { this.setState({ activeMenu: 'Home' })}.bind(this)}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div></div>
          <div className="navbar-menu">
            <Link to="/" className="navbar-link" onClick={function(e) { this.setState({ activeMenu: 'Home' })}.bind(this)}>
              {this.state.activeMenu === 'Home' ? <NavigationBarIcons.HomeActiveIcon /> : <NavigationBarIcons.HomeIcon />}
            </Link>
            <Link to="/direct/inbox" className="navbar-link" onClick={function(e) { this.setState({ activeMenu: 'Inbox' })}.bind(this)}>
              {this.state.activeMenu === 'Inbox' ? <NavigationBarIcons.DirectMessageActiveIcon /> : <NavigationBarIcons.DirectMessageIcon />}
            </Link>
            <Link to="/create/select" className="navbar-link" onClick={function(e) { e.preventDefault(); this.setState({ activeMenu: 'Upload' })}.bind(this)}>
              {this.state.activeMenu === 'Upload' ? <NavigationBarIcons.UploadActiveIcon /> : <NavigationBarIcons.UploadIcon />}
            </Link>
            <Link to="/explore" className="navbar-link" onClick={function(e) { this.setState({ activeMenu: 'Explore' })}.bind(this)}>
              {this.state.activeMenu === 'Explore' ? <NavigationBarIcons.ExploreActiveIcon /> : <NavigationBarIcons.ExploreIcon />}
            </Link>
            <Link to="/accounts/activity" className="navbar-link" onClick={function(e) { e.preventDefault(); this.setState({ activeMenu: 'Activity' })}.bind(this)}>
              {this.state.activeMenu === 'Activity' ? <NavigationBarIcons.ActivityActiveIcon /> : <NavigationBarIcons.ActivityIcon />}
            </Link>
            <span className="navbar-link" onClick={function(e) { e.preventDefault(); this.setState({ activeMenu: 'Profile' })}.bind(this)}>
              { this.state.activeMenu === 'Profile' && <div className="profile-border"></div>}
              <img className="profile-image" src={this.state.profileImage} alt="profile" />
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;