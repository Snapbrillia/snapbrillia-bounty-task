import React, { useState } from 'react';

//Components
import { Row, Col } from 'react-bootstrap';

//Icons
import CloseIcon from '../../assets/icon/white_close_icon.svg';

//CSS
import '../css/grantSideMenu.css';
import '../../shared/css/sharedStyles.css';

const GrantSideMenu = ({ setGrantFilterQuery, grantFilterQuery }) => {
  const [searchInput, setSearchInput] = useState({ value: '', userInput: '' });
  const [searchFields, setSearchFields] = useState([]);

  const sortingArray = [
    'New',
    'Close to funding',
    'Recently updated',
  ];
  const matchingArray = [
    'Match Pool 1',
    'Match Pool 2',
    'Match Pool 3',
    'Match Pool 4',
    'Match Pool 5',
  ];

  const showOnlyArray = ['My Favorites', 'My Grant Proposals'];

  const removeSpecialChars = (string) => {
    return string.replace(/[^\w\s]/gi, '');
  };

  const handleSearch = (e) => {
    setGrantFilterQuery({
      ...grantFilterQuery,
      search: e.target.value.toLowerCase(),
    });
    const input1 = removeSpecialChars(e.target.value).toLowerCase();
    const input2 = removeSpecialChars(e.target.value);
    setSearchInput({ value: input1, userInput: input2 });
  };

  const enterSearch = (e) => {
    if (e.key === 'Enter') {
      const input = removeSpecialChars(e.target.value).toLowerCase();
      const alreadyExist = searchFields.some((value) => value.value === input);

      if (!alreadyExist && searchInput.userInput.trim()) {
        setSearchFields([...searchFields, searchInput]);
        setSearchInput({ value: '', userInput: '' });
      }
    }
  };

  const removeSearchInput = (item, optionName) => {
    const newList = searchFields.filter((el) => el.value !== item.value);
    setGrantFilterQuery({
      ...grantFilterQuery,
      matchPools: newList.filter(x => x.userInput.includes('Match Pool')),
      sort: newList.filter(x => !x.userInput.includes('Match Pool')),
    });
    setSearchFields(newList);
  };

  const handleOptions = (item, optionName) => {
    const newItem = { value: item.toLowerCase(), userInput: item };
    const alreadyExist = searchFields.some(
      (value) => value.value === newItem.value
    );

    if (!alreadyExist) {
      setSearchFields([...searchFields, newItem]);
      setGrantFilterQuery({
        ...grantFilterQuery,
        matchPools: [...searchFields, newItem].filter(x => x.userInput.includes('Match Pool')),
        sort: [...searchFields, newItem].filter(x => !x.userInput.includes('Match Pool')),
      });
    } else {
      removeSearchInput(newItem, optionName);
    }
  };

  return (
    <div className="grant-side-menu-container px-3">
      <Row>
        <Col className="py-2 mt-3" xs={12}>
          <input
            onKeyPress={(e) => enterSearch(e)}
            onChange={(e) => handleSearch(e)}
            value={searchInput.userInput}
            placeholder="Search"
            className="grant-side-menu-search"
            type="search"
          />
        </Col>
        <Col xs={12} className="px-3">
          <div className="grant-side-menu-searched-pills">
            {searchFields.map((item, idx) => (
              <span key={item.value} className="grant-side-menu-pill">
                {item.userInput}
                <span
                  onClick={() => removeSearchInput(item)}
                  className="grant-side-menu-close-icon"
                >
                  <img src={CloseIcon} alt="close-icon" height={8} width={8} />
                </span>
              </span>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-5">
          <h5 className="regular">Matchpools</h5>
        </Col>
        
        <Col xs={12}>
          <div className="grant-side-menu-searched-pills">
            {matchingArray.map((item, i) => (
              <span
                onClick={() => handleOptions(item, 'matchPools')}
                className={`grant-side-menu-pill-padding cursor-pointer ${
                  searchFields.some(
                    (value) => value.value === item.toLowerCase()
                  )
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
        <Col xs={12} className="mt-3">
          <h5 className="regular">Sorting</h5>
        </Col>
        <Col xs={12}>
          <div className="grant-side-menu-searched-pills">
            {sortingArray.map((item, i) => (
              <span
                onClick={() => handleOptions(item, 'sort')}
                className={`grant-side-menu-pill-padding cursor-pointer ${
                  searchFields.some(
                    (value) => value.value === item.toLowerCase()
                  )
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
      {/* <Row>
        <Col xs={12} className="mt-3">
          <h5 className="regular">Show Only</h5>
        </Col>
        <Col xs={12}>
          <div className="grant-side-menu-searched-pills">
            {showOnlyArray.map((item, i) => (
              <span
                onClick={() => handleOptions(item, 'myProposals')}
                className={`grant-side-menu-pill-padding cursor-pointer ${
                  searchFields.some(
                    (value) => value.value === item.toLowerCase()
                  )
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
      </Row> */}
    </div>
  );
};

export default GrantSideMenu;
