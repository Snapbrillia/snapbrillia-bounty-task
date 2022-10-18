import React from 'react';
import '../../shared/css/typography.css';
import '../../shared/menus/css/dropDownMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Mentor from '../../assets/icon/snapbrillia_mentor_icon.png';
import Mentee from '../../assets/icon/snapbrillia_mentee_icon.png';
import Individual from '../../assets/icon/snapbrillia_individual_icon.png';
import { Link, navigate } from '@reach/router';
import { toast } from 'react-toastify';

const ExpressInterestTooptip = ({ setShow, bounty }) => {
  const goToMenteePage = () => {
    if (!bounty.teamIds || !bounty.teamIds.length) {
      return toast('No available teams now');
    }
    navigate(`/bounties/${bounty._id}/mentee-page`);
  };
  return (
    <Dropdown.Menu align="start" className="dropdown-menu-nav-bar right-0" show>
      <Dropdown.Header className="dropdown-header-nav-bar">
        How would you like to continue?
      </Dropdown.Header>
      <div className="container-dropdown-nav-bar">
        <Dropdown.Item
          className="dropdown-item-nav-bar"
          eventKey="1"
          as={Link}
          to="team-mentor"
        >
          <img src={Mentor} alt="mentor-icon" />
          <span className="text-muted p-3">As a Mentor</span>
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item-nav-bar"
          onClick={() => goToMenteePage()}
        >
          <img src={Mentee} alt="mentee-icon" />
          <span className="text-muted p-3">As a Mentee</span>
        </Dropdown.Item>
        {!bounty.teamOnly && (
          <Dropdown.Item
            className="dropdown-item-nav-bar"
            as={Link}
            to="individual"
          >
            <img src={Individual} alt="individual-icon" />
            <span className="text-muted p-3">As an Individual</span>
          </Dropdown.Item>
        )}
      </div>
    </Dropdown.Menu>
  );
};

export default ExpressInterestTooptip;
