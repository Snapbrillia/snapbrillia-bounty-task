import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDownMenu from './dropDownMenu';
import { useAuth } from '../../context/authContext';
import { UserImage } from '../../shared/images';

function NavMenuAfterLogin(props) {
  const { auth } = useAuth();
  const toggleLoggedIn = props.toggleLoggedIn;
  return (
    <>
      <Dropdown drop="down">
        <Dropdown.Toggle
          variant="outline-light"
          className="nav-bar-dropdown-toggle nav-bar-btn-outline-light border-0 p-0"
        >
          <img
            className="nav-bar-profile-img"
            src={UserImage(auth.user)}
            alt="profile"
          />
        </Dropdown.Toggle>
        <DropDownMenu toggleLoggedIn={toggleLoggedIn} />
      </Dropdown>
    </>
  );
}

export default NavMenuAfterLogin;
