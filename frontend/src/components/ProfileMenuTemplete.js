import { React, Component } from 'react';
import { ProfileMenuItem, Divider } from '.';
import { ProfileMenuIcons } from '../assets/icons';

class ProfileMenuTemplete extends Component {
  render() {
    return (
      <div>
        <div style={{ inset: "0", position: "fixed" }}></div>
        <div>
          <div></div>
          <div className="profile-menu-items">
            <ProfileMenuItem icon={ProfileMenuIcons.ProfileIcon} text="프로필" />
            <ProfileMenuItem icon={ProfileMenuIcons.BookmarkIcon} text="저장됨" />
            <ProfileMenuItem icon={ProfileMenuIcons.SettingIcon} text="설정" />
            <ProfileMenuItem icon={ProfileMenuIcons.SwitchIcon} text="계정 전환" />
            <Divider />
            <ProfileMenuItem text="로그아웃" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMenuTemplete;