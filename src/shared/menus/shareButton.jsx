import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ShareDropdown from './shareDropdown';
import Share from '../../assets/icon/snapbrillia_share_icon_alt.svg';

function ShareButton(props) {
  const toggleLoggedIn = props.toggleLoggedIn;
  return (
    <Dropdown className="d-flex align-items-end" drop="down">
      <Dropdown.Toggle
        variant="outline-light"
        className="nav-bar-dropdown-toggle nav-bar-btn-outline-light border-0 p-0"
      >
        <div className="share">
          <span className="grant-matching-svgs" id="share">
            <img src={Share} alt="share-icon" />
          </span>
          Share
        </div>
      </Dropdown.Toggle>
      <ShareDropdown toggleLoggedIn={toggleLoggedIn} />
    </Dropdown>
  );
}

export default ShareButton;
