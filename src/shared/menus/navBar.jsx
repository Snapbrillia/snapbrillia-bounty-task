import React, { useState } from 'react';

//Components
import Dropdown from 'react-bootstrap/Dropdown';
import NavMenuBeforeLogin from './NavMenuBeforeLogin';
import NavMenuAfterLogin from './NavMenuAfterLogin';
import Notifications from './notifications';
import { useAuth } from '../../context/authContext';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from '@reach/router';

//Icons And Images
import SnapbrilliaLogo from '../../assets/SnapBetaLogo.png';
import Notification from '../../assets/icon/snapbrillia_notifications_icon.png';
import Wallet from '../../assets/icon/snapbrillia_wallet_icon.svg';
import DropDownWallet from './dropDownWallet';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navBar.css';

export default function NavBar({ setGrantId }) {
  const getNavClass = ({ isCurrent }) => {
    const navClassName = 'nav-link-text';
    return isCurrent
      ? { className: `${navClassName} active` }
      : { className: `${navClassName}` };
  };
  const { auth, logout } = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationNumber, setNotificationNumber] = useState(0);

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
    logout();
  };

  const handleLogoClick = () => {
    window.open('https://www.snapbrillia.com', '_self');
  };

  const getWalletInfo = () => {
    setShowNotifications(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="nav-bar-box-shadow nav-bar-border-radius flex-wrap justify-content-between ps-3 pe-4 mb-4"
    >
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <img
        onClick={handleLogoClick}
        src={SnapbrilliaLogo}
        alt="snapbrillia-logo"
        className="nav-logo image-fluid pointer"
      />

      <div className="nav-bar-menus d-flex">
        <Navbar.Collapse
          id="navbarScroll"
          className="nav-link-list m-0 align-items-center"
        >
          <div className="d-flex align-items-end align-items-sm-center">
            <Nav className="text-start-sm border-right-light">
              <NavLink
                style={{ marginRight: '60px' }}
                eventKey="1"
                as={Link}
                getProps={getNavClass}
                to="/bounties"
              >
                Gigs
              </NavLink>
              <NavLink
                style={{ marginRight: '60px' }}
                eventKey="2"
                as={Link}
                getProps={getNavClass}
                to="/grants"
              >
                Grants
              </NavLink>
              <NavLink
                style={{ marginRight: '60px' }}
                eventKey="3"
                as={Link}
                getProps={getNavClass}
                to="/teams"
              >
                Work
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center nav-icon-container">
              <div className="messages-notifications">
                <img
                  src={Notification}
                  alt="notification"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="nav-bar-icon pointer"
                />
                {notificationNumber > 0 && <div className="messages-count" />}
                <Notifications
                  showNotifications={showNotifications}
                  setShowNotifications={setShowNotifications}
                  setNotificationNumber={setNotificationNumber}
                />
              </div>

              <Dropdown drop="down">
                <Dropdown.Toggle
                  variant="outline-light"
                  className="nav-bar-dropdown-toggle nav-bar-btn-outline-light border-0 p-0"
                >
                  <img
                    src={Wallet}
                    alt="wallet-icon"
                    onClick={() => {
                      getWalletInfo();
                    }}
                    className="nav-bar-icon"
                  />
                </Dropdown.Toggle>
                <DropDownWallet />
              </Dropdown>
              {auth ? (
                <NavMenuAfterLogin toggleLoggedIn={toggleLoggedIn} />
              ) : (
                <NavMenuBeforeLogin toggleLoggedIn={toggleLoggedIn} />
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
