import React, { useState, useEffect } from 'react';

//COMPONENTS
import { Col, Row } from 'react-bootstrap';
import CloseIcon from '../../assets/icon/white_close_icon.svg';

//CSS
import './css/bountySideMenu.css';
import '../css/bgColors.css';
import '../css/sharedStyles.css';
import '../css/typography.css';

const BountySideMenu = ({ setBountiesFilters, bountiesFilters }) => {
  const bountiData = [
    'React',
    'JavaScript',
    'Web3.js',
    'Python',
    'Angular',
    'Node',
    'Solidity',
    'Haskell',
  ];
  const [quickSelectItems, setQuickSelectItems] = useState([]);
  function unCheck() {
    setQuickSelectItems([]);
    setBountiesFilters({
      search: '',
      status: null,
      difficulty: [],
      timeEstimationType: [],
      languages: [],
      teams: [],
      teamPreference: null,
      // teamsOnly: false,
      mentorAvailable: false,
      permissionLess: null,
      skills: [],
    });
    var x = document.getElementsByClassName('checkbox');
    for (let i = 0; i <= x.length - 1; i++) {
      x[i].checked = false;
    }
    var y = document.getElementsByClassName('radio');
    for (let i = 0; i <= y.length - 1; i++) {
      y[i].checked = false;
    }
  }
  useEffect(() => {
    setBountiesFilters({
      ...bountiesFilters,
      skills: quickSelectItems,
    });
  }, [quickSelectItems]);

  const handleBountiesFilters = (e, filter) => {
    let { value, checked } = e.target;
    console.log(value);
    if (filter === 'search') {
      setBountiesFilters({
        ...bountiesFilters,
        search: e.target.value.toLowerCase(),
      });
      return;
    }
    if (
      [
        'mentorNeeded',
        'mentorAvailable',
      ].includes(filter)
    ) {
      setBountiesFilters({
        ...bountiesFilters,
        teamPreference : null,
        [filter]: !bountiesFilters[filter],
      });
      return;
    }
    if(filter === "permissionLess") {
      setBountiesFilters({
        ...bountiesFilters,
        [filter]: value === "acceptAll" ? true : false,
      });
      return 
    }
    if(filter === "teamPreference"){
      setBountiesFilters({
        ...bountiesFilters,
        mentorAvailable : false,
        [filter]: value === "openToAll" ? false : true,
      });
      return
    }
    if (filter === "status"){
      setBountiesFilters({
        ...bountiesFilters,
        [filter]: value
      })
      return
    }
    if (!bountiesFilters[filter].includes(value) && checked) {
      setBountiesFilters({
        ...bountiesFilters,
        [filter]: [...bountiesFilters[filter], value],
      });
    }
    if (bountiesFilters[filter].includes(value) && !checked) {
      setBountiesFilters({
        ...bountiesFilters,
        [filter]: [...bountiesFilters[filter].filter((e) => e !== value)],
      });
    }
    // console.log(filter)
    // console.log(value)
  };

  const addQuickSelectItem = (item, action) => {
    if (action === 'add') {
      return (
        !quickSelectItems.includes(item) &&
        setQuickSelectItems([...quickSelectItems, item])
      );
    }
    setQuickSelectItems(quickSelectItems.filter((e) => e !== item));
  };

  const removeSearchInput = (item) => {
    const newList = quickSelectItems.filter((el) => el.value !== item.value);
    setQuickSelectItems(newList);
  };

  const handleOptions = (item) => {
    const newItem = { value: item };
    const alreadyExist = quickSelectItems.some(
      (value) => value.value === newItem.value
    );

    if (!alreadyExist) {
      setQuickSelectItems([...quickSelectItems, newItem]);
    } else {
      removeSearchInput(newItem);
    }
  };

  return (
    <div className="bounty-sideMenu-container px-3">
      <Row>
        <Col className="py-2 my-3">
          <input
            placeholder="Search"
            type="text"
            className="bounty-sideMenu-search"
            onChange={(e) => handleBountiesFilters(e, 'search')}
          />
        </Col>
        <div className="grant-side-menu-searched-pills">
          {quickSelectItems.map((item, index) => (
            <span key={item.value} className="grant-side-menu-pill">
              {item.value}
              <span
                onClick={() => addQuickSelectItem(item)}
                className="grant-side-menu-close-icon"
              >
                <img src={CloseIcon} alt="close-icon" height={8} width={8} />
              </span>
            </span>
          ))}
        </div>
      </Row>
      <Row>
        <Col xs={12} className="pt-2 px-3">
          <h5 className="regular">Quick Select</h5>
        </Col>
        <Col>
          <div className="grant-side-menu-searched-pills">
            {bountiData.map((item, i) => (
              <span
                onClick={() => handleOptions(item)}
                className={`grant-side-menu-pill-padding cursor-pointer ${
                  quickSelectItems.some((value) => value.value === item)
                    ? `grant-side-menu-pill `
                    : 'grant-side-menu-pill grant-side-menu-pill-not-active'
                }`}
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        {/* DropDown List */}
        <Col xs={12} className="mt-4 px-3">
          <h5 className="regular">Skills</h5>
        </Col>
        <Col>
          <select
            id="skills"
            className="bounty-sideMenu-dropDown"
            name="skills"
            onChange={(e) => handleBountiesFilters(e, 'skills')}
          >
            <option>All</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </Col>
      </Row>
      {/* CheckBoxes */}
      <Row>
        <Col>
          <Col className="mt-4">
            <h5 className="regular">Status</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'status')}
                value="open"
                type="radio"
                name="status"
                className="checkbox"
                id="status-open"
              />{' '}
              Open
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'status')}
                value="done"
                type="radio"
                name="status"
                className="checkbox"
                id="status-done"
              />{' '}
              Done
            </span>
          </Col>
        </Col>
        <Col>
          <Col className="mt-4">
            <h5 className="regular">Permission</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'permissionLess')}
                value="acceptAll"
                type="radio"
                name="permissionLess"
                className="checkbox"
                id="permissionless-false"
                // checked={bountiesFilters['permissionLess'] === false}
              />{' '}
              Accept All
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'permissionLess')}
                value="applications"
                type="radio"
                name="permissionLess"
                className="checkbox"
                id="permissionless-true"
                // checked={bountiesFilters['permissionLess'] === false}
              />{' '}
              Applications
            </span>
          </Col>
        </Col>
        {/*<Col>
          <Col className="mt-4">
            <h5 className="regular">Difficulty Level</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'difficulty')}
                value="easy"
                type="checkbox"
                className="checkbox"
                id="checkBox"
              />{' '}
              Easy
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'difficulty')}
                value="medium"
                type="checkbox"
                className="checkbox"
                id="checkBox"
              />{' '}
              Medium
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'difficulty')}
                value="hard"
                type="checkbox"
                className="checkbox"
                id="checkBox"
              />{' '}
              Hard
            </span>
          </Col>
        </Col>*/}
      </Row>
      <Row className="my-4">
        <Col>
          <Col className="mt-4">
            <h5 className="regular">Time Estimation</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'timeEstimationType')}
                value="Hours"
                type="checkbox"
                name="time"
                className="checkbox"
                id="time-estimation-type-hours"
              />{' '}
              Hours
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'timeEstimationType')}
                value="Days"
                type="checkbox"
                name="time"
                className="checkbox"
                id="time-estimation-type-days"
              />{' '}
              Days
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'timeEstimationType')}
                value="Weeks"
                type="checkbox"
                name="time"
                className="checkbox"
                id="time-estimation-type-weeks"
              />{' '}
              Weeks
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <input
                onChange={(e) => handleBountiesFilters(e, 'timeEstimationType')}
                value="Months"
                type="checkbox"
                name="time"
                className="checkbox"
                id="time-estimation-type-months"
              />{' '}
              Months
            </span>
          </Col>
        </Col>
        <Col className="pe-0">
          <Col className="mt-4">
            <h5 className="regular">Teams</h5>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <label
                className="bounty-side-label-rm-radio"
                htmlFor="teams-only"
              >
                <input
                  onChange={(e) => handleBountiesFilters(e, 'teamPreference')}
                  value="teamPreference"
                  name="teams"
                  type="radio"
                  id="teams-only"
                  className="checkbox m-1"
                />
                Team Player
              </label>
            </span>
          </Col>
          {/*<Col>
            <span className="grey-title fs-6">
              <label
                className="bounty-side-label-rm-radio"
                htmlFor="mentor-needed"
              >
                <input
                  onChange={(e) => handleBountiesFilters(e, 'mentorNeeded')}
                  name="mentor-needed"
                  type="checkbox"
                  id="mentor-needed"
                  className="checkbox m-1"
                />
                Mentor Needed
              </label>
            </span>
      </Col>*/}
          <Col>
            <span className="grey-title fs-6">
              <label
                className="bounty-side-label-rm-radio"
                htmlFor="mentor-available"
              >
                <input
                  onChange={(e) => handleBountiesFilters(e, 'mentorAvailable')}
                  value="mentorAvailable"
                  name="teams"
                  type="radio"
                  id="mentor-available"
                  className="checkbox m-1"
                />
                Mentor Available
              </label>
            </span>
          </Col>
          <Col>
            <span className="grey-title fs-6">
              <label
                className="bounty-side-label-rm-radio"
                htmlFor="open-to-all"
              >
                <input
                  onChange={(e) => handleBountiesFilters(e, 'teamPreference')}
                  value="openToAll"
                  name="teams"
                  type="radio"
                  id="team-preference-false"
                  className="checkbox m-1"
                />
                Worker
              </label>
            </span>
          </Col>
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="text-end">
          <button className="bounty-sideMenu-btn pt-5" onClick={unCheck}>
            Reset Filters
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default BountySideMenu;
