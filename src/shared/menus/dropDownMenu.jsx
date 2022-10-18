import '../css/typography.css';
import './css/dropDownMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Profile from '../../assets/icon/snapbrillia_profile_personal_icon.svg';
import Settings from '../../assets/icon/snapbrillia_settings_icon.svg';
import SignOut from '../../assets/icon/snapbrillia_signout_icon.svg';
import { useAuth } from '../../context/authContext';
import { Link } from '@reach/router';

export default function DropDownMenu(props) {
  const { auth } = useAuth();
  return (
    <Dropdown.Menu className="dropdown-menu-nav-bar dropdown-menu-end drop-downs-sm-right-auto-profile">
      <Dropdown.Header className="dropdown-header-nav-bar">
        Welcome back, {auth.user.fullName}
      </Dropdown.Header>
      <div className="container-dropdown-nav-bar">
        <Dropdown.Item className="dropdown-item-nav-bar" eventKey="1" as={Link} to="/profile-page">
          <img
            src={Profile}
            alt="profile-icon"
            className="dropdown-profile-icon-mute"
          />
          <span
            className="text-muted p-3"
          >
            My account
          </span>
        </Dropdown.Item>
        {/* <Dropdown.Item className="dropdown-item-nav-bar" eventKey="2" as={Link} to="/settings-page">
          <img
            src={Settings}
            alt="settings-icon"
            className="dropdown-settings-icon-mute"
          />
          <span className="text-muted p-3">Settings</span>
        </Dropdown.Item> */}
        <Dropdown.Item className="dropdown-item-nav-bar" eventKey="3">
          <img
            src={SignOut}
            alt="signout-icon"
            className="dropdown-signout-icon-mute"
          />
          <span className="text-muted p-3" onClick={props.toggleLoggedIn}>
            Sign Out
          </span>
        </Dropdown.Item>
      </div>
    </Dropdown.Menu>
  );
}
