import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDownLogin from './DropDownLogin';
import Empty from '../../assets/icon/snapbrillia_empty_profile_icon.svg';

function NavMenuBeforeLogin(props) {
  const toggleLoggedIn = props.toggleLoggedIn;
  return (
    <Dropdown drop="down">
      <Dropdown.Toggle
        variant="outline-light"
        className="nav-bar-dropdown-toggle nav-bar-btn-outline-light border-0 p-0"
      >
        <img
          className="nav-bar-profile-img"
          src={Empty}
          alt="profile"
        />
      </Dropdown.Toggle>
      <DropDownLogin toggleLoggedIn={toggleLoggedIn} />
    </Dropdown>
  );
}

export default NavMenuBeforeLogin;
