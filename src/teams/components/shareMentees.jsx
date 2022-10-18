import React, { useState, useCallback /* useRef */ } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

import DropDown from '../../assets/icon/snapbrillia_dropdown_icon.svg';

import '../css/shareMentees.css';

const ShareMentees = () => {
  const [wordCnt, setWordCnt] = useState(0);
  const [content, setContent] = useState('');
  const [values, setValues] = useState();

  const [uniqueId, setUniqueID] = useState(
    () => 'select_' + Math.random().toFixed(5).slice(2)
  );

  //   const dropdown = useRef();

  const animatedComponents = makeAnimated();

  const labelStyles = {
    container: (styles) => ({
      display: 'flex',
      paddingLeft: 0,
      marginLeft: -10,
      //   height: "100",
    }),
    control: (styles) => ({
      backgroundColor: '#fafafa',
      maxWidth: '85%',
      display: 'flex',
      //   height: "100",
    }),

    menu: (provided, state) => {
      return {
        display: 'none',
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: '#ffffff',
        backgroundColor: '#605f92',
        borderRadius: '10px 0 0 10px',
        fontSize: '10px',
        fontWeight: 500,
        // width: "200px",
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        color: '#fafafa',
        backgroundColor: 'none',
        marginBottom: '5px',
        // width: "200px",
        // width: "100%",
        // maxWidth: "50px",
      };
    },
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      backgroundColor: '#605f92',

      borderRadius: '0 10px 10px 0',
    }),
    dropdownIndicator: (provided, state) => {
      return {
        display: 'none',
      };
    },
    indicatorSeparator: (provided, state) => {
      return {
        display: 'none',
      };
    },
    clearIndicator: (provided, state) => {
      return {
        cursor: 'pointer',
      };
    },
    placeholder: (provided, state) => {
      return {};
    },
  };

  const options = [
    { value: 'react', label: 'React' },
    { value: 'js', label: 'JavaScript' },
    { value: 'web3', label: 'Web3.js' },
    {
      value: 'c++',
      label: 'C++',
    },
    { value: 'python', label: 'Python' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'ts', label: 'TypesSript' },
    { value: 'java', label: 'Java' },
  ];

  const dropdownStyles = (id) => {
    // console.log('entered');
    return {
      container: (styles) => ({
        paddingLeft: 0,

        //   height: "100",
      }),
      option: (provided, state) => {
        // console.log('select', state.isSelected);
        return {
          color: state.isSelected || state.isFocused ? '#2d2b6f' : '#808080',
          padding: 10,
          fontWeight: 500,
          cursor: 'pointer',
        };
      },
      control: (provided, state) => {
        return {
          borderWidth: 0,
          //   alignItems: "center",
          borderRadius: 6,
          backgroundColor: '#f4f4f4',
          //   height: "100px",
          display: 'flex',
          //   alignContent: "space-between",
          // flexWrap: 'wrap',
          color: '#808080',
          fontSize: '14px',
          fontWeight: 500,
          width: '80%',
          // maxWidth: '150px',
          // minWidth: id === 2 ? '100%' : null,
          zIndex: 999,
          cursor: 'pointer',
        };
      },
      singleValue: (provided, state) => {
        return {
          //   ...provided,
          color: '#ffffff',
          fontWeight: 500,
          zIndex: 999,
          // width: id === 2 ? '150px' : '70%',
        };
      },
      menu: (provided, state) => {
        // console.log("state2", state);
        const { menuIsOpen } = state.selectProps;
        // console.log("menu", menuIsOpen);
        return {
          //   ...provided,
          position: 'absolute',
          width: 'calc((41.67% - 33.5px) * 0.8)',
          //   width: id === 2 ? "150px" : "100%",
          //   maxWidth: "150px",
          color: state.selectProps.menuColor,
          backgroundColor: '#fff',
          //   maxHeight: "500px",
          //   height: open[id] === 1 ? state.options.length * 41 : "0px",
          boxShadow: '0px 0px 20px -5px rgba(0, 0, 0, 0.25)',
          borderRadius: 4,
          //   opacity: menuIsOpen ? 1 : 0,
          transition: 'all 0.8s ease-in-out',

          //   visibility: menuIsOpen ? "visible" : "hidden",
          zIndex: 9999,
          //   overflow: "hidden",
        };
      },
      dropdownIndicator: (provided, state) => {
        // const { isFocused } = state;
        const { menuIsOpen } = state.selectProps;

        return {
          position: 'relative',
          right: '8px',
          bottom: '2px',
          //   animation: !menuIsOpen ? "bounty-table-recover 0.8s" : null,

          transform: menuIsOpen
            ? 'rotate(180deg) translateY(-2px)'
            : 'rotate(0deg)',
          transition: 'all 0.8s ease-in-out',
        };
      },
      input: (provided, state) => {
        return {
          ...provided,
          color: '#808080',
          fontSize: '14px',
          fontWeight: 500,
          gridTemplateColumns: '0 min-content',
          //   margin: "2px",
          //   flex: "1 1 auto",
          //   display: "inline-grid",
          //   width: "1px",
          //   width: "20px",
          //   display: "inline-block",
        };
      },
      valueContainer: (provided, state) => {
        return {
          ...provided,
          //   display: "flex",
          //   flex: 1,
          //   boxSizing: "border-box",
          //   flexWrap: "wrap",
          alignItems: 'center',
          display: '-webkit-box',
          //   display: "-webkit-flex",
          //   display: "grid",
          padding: '2px 8px',
          width: '100%',

          //   gridTemplateColumns: "0 min-content",
          //   display: "flex",
          //   justifyContent: "space-between",
          //   width: "20px",
          //   display: "inline-block",
        };
      },
      /*  placeholder: () => {
        return {
          //   position: "absolute",
        };
      }, */
    };
  };

  const setTextareaContent = useCallback((e) => {
    let temp = e.target.value.trim().split(' ').filter(Boolean);
    console.log('temp', temp);

    if (temp.length >= 400) {
      setContent(temp.slice(0, 400).join(' '));
      setWordCnt(400);

      console.log('e.value', e.target.value);
    } else {
      setWordCnt(temp.length);
      setContent(e.target.value);
    }
  }, []);

  const DropdownIndicator = (state) => {
    // console.log('dropdownstate', state);

    return (
      <components.DropdownIndicator {...state}>
        <div>
          <img src={DropDown} alt="drop-down-icon" />
        </div>
      </components.DropdownIndicator>
    );
  };

  const MultiValueContainer = ({ selectProps, data }) => {
    const values = selectProps.value;
    if (values) {
      return values[values.length - 1].label === data.label
        ? data.label
        : data.label + ', ';
    } else {
      return '';
    }
  };
  return (
    <Container fluid>
      <Row className="share-mentees-title">Share with Mentees</Row>
      <Row className="share-mentees-description">
        Looks like you are missing some personal information. Fill out the empty
        fields in the form below to begin the mentor process.
      </Row>
      <Row className="share-mentees-bottom">
        <Col xs={12} lg={4}>
          <Row className="description">Describe yourself and how you work</Row>
          <textarea
            className="textarea"
            id="description"
            value={content}
            onChange={(e) => {
              setTextareaContent(e);
            }}
            onPaste={(e) => {
              wordCnt >= 400 ? e.preventDefault() : setTextareaContent(e);
            }}
            // maxlength="400"
          ></textarea>
          <Row
            style={{ color: wordCnt >= 400 ? '#dc3545' : null }}
            className="wordCount"
          >
            {wordCnt}/400
          </Row>
        </Col>
        <Col>
          <Row className="share-mentees-details">
            <Col xs={12} md={5}>
              <Row className="share-mentees-categories">
                What languages do you know?
              </Row>
              <Row>
                <Select
                  isMulti
                  placeholder={''}
                  isSearchable={false}
                  value={values}
                  onChange={(e) => {
                    setValues(e);
                  }}
                  // closeMenuOnSelect={false}
                  options={options}
                  styles={labelStyles}
                  components={animatedComponents}
                />
              </Row>
              <Row className="grant-setup-tag">Tags*</Row>
              <Row className="">
                <Select
                  isMulti
                  placeholder={''}
                  isSearchable={false}
                  value={values}
                  onChange={(e) => {
                    setValues(e);
                    // setData({ ...data, tags: e.map((e) => e.label) });
                  }}
                  options={options}
                  styles={labelStyles}
                  components={animatedComponents}
                />
              </Row>
              <Row className="">Languages</Row>
              <Row>
                <Select
                  //   ref={dropdown}
                  id={uniqueId}
                  isMulti
                  //   isSearchable={false}
                  closeMenuOnSelect={false}
                  maxMenuHeight={500}
                  value={values}
                  onMenuClose={() => {
                    const menuEl = document.querySelector(
                      `#${uniqueId} .share-mentees-dropdownMenu`
                    );
                    console.log(menuEl);
                    const containerEl = menuEl?.parentElement;
                    const clonedMenuEl = menuEl?.cloneNode(true);

                    if (!clonedMenuEl) {
                      return;
                    }

                    clonedMenuEl.classList.add('menu--close');
                    clonedMenuEl.addEventListener('animationend', () => {
                      containerEl?.removeChild(clonedMenuEl);
                    });

                    containerEl?.appendChild(clonedMenuEl);
                  }}
                  onChange={(e) => {
                    setValues(e);
                  }}
                  components={{
                    DropdownIndicator,
                    IndicatorSeparator: () => null,
                    //   animatedComponents,
                    MultiValueContainer,
                    Menu: (props) => (
                      <components.Menu
                        {...props}
                        className="share-mentees-dropdownMenu"
                      />
                    ),
                  }}
                  // components={animatedComponents}
                  options={options}
                  styles={dropdownStyles()}
                  classNamePrefix="share-mentees-dropdown"
                />
              </Row>
              {/* {console.log("dropdown", dropdown.current.getValue())} */}
            </Col>
            <Col xs={12} md={4}>
              <Row className="share-mentees-categories">
                My Experience level
              </Row>
              <Row>
                {/* <p>
                  <input type="radio" id="test1" name="radio-group" checked />
                  <label for="test1">Apple</label>
                </p>
                <p>
                  <input type="radio" id="test2" name="radio-group" />
                  <label for="test2">Peach</label>
                </p>
                <p>
                  <input type="radio" id="test3" name="radio-group" />
                  <label for="test3">Orange</label>
                </p> */}
                <div className="share-mentees-form-control">
                  <input
                    className="radio"
                    id="1-3"
                    type="radio"
                    name="radio-group"
                  />
                  <label htmlFor="1-3">
                    <span className="share-mentees-form-control-text">
                      1-3 years
                    </span>
                  </label>
                </div>
                <div className="share-mentees-form-control">
                  <input
                    className="radio"
                    id="4-8"
                    type="radio"
                    name="radio-group"
                  />
                  <label htmlFor="4-8">
                    <span className="share-mentees-form-control-text">
                      4-8 years
                    </span>
                  </label>
                </div>
                <div className="share-mentees-form-control">
                  <input
                    className="radio"
                    id="8+"
                    type="radio"
                    name="radio-group"
                  />
                  <label htmlFor="8+">
                    <span className="share-mentees-form-control-text">
                      8+ years
                    </span>
                  </label>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className="share-mentees-categories">Time commitment</Row>
              <Row className="share-mentees-checkboxes">
                <input id="hours" type="checkbox" />
                <label className="share-mentees-form-control" htmlFor="hours">
                  <span className="share-mentees-checkbox"></span>
                  <span className="share-mentees-form-control-text-checkbox">
                    Hours
                  </span>
                </label>

                <input id="days" type="checkbox" />
                <label className="share-mentees-form-control" htmlFor="days">
                  <span className="share-mentees-checkbox"></span>
                  <span className="share-mentees-form-control-text-checkbox">
                    Days
                  </span>
                </label>

                <input id="weeks" type="checkbox" />
                <label className="share-mentees-form-control" htmlFor="weeks">
                  <span className="share-mentees-checkbox"></span>
                  <span className="share-mentees-form-control-text-checkbox">
                    Weeks
                  </span>
                </label>

                <input id="months" type="checkbox" />
                <label className="share-mentees-form-control" htmlFor="months">
                  <span className="share-mentees-checkbox"></span>
                  <span className="share-mentees-form-control-text-checkbox">
                    Months
                  </span>
                </label>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShareMentees;
