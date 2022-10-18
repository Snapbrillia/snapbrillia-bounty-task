import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


export default function ShareDropdown(props) {
  const [isEmailed, setIsEmailed] = useState(false);
  const [email, setEmail] = useState(null);
  const handleSubmit = async () => {};

  return (
    <Dropdown.Menu className="dropdown-menu-nav-bar dropdown-menu-end">
      <Dropdown.Header className="dropdown-header-nav-bar">
        Share the Grant to...
      </Dropdown.Header>
      <Dropdown.Header className="dropdown-header-nav-bar">
        {isEmailed ? (
          <Dropdown.Header className="dropdown-header-nav-bar text-center m-4">
            Email Has Been Sent!
            <p onClick={props.toggleLoggedIn}>Check your email</p>
          </Dropdown.Header>
        ) : (
          <>
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <div className="text-end mt-4">
              <a className="btn-continue" href="#" onClick={handleSubmit}>
                Share
              </a>
            </div>
          </>
        )}
      </Dropdown.Header>
    </Dropdown.Menu>
  );
}
