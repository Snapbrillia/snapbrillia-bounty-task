import { useState, useCallback, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

import { GrantSetupContext } from './grantSetup';
import DropDown from '../../assets/icon/snapbrillia_dropdown_icon.svg';
import UploadFiles from './uploadFiles';
import '../css/grantSetupStep.css';
import { useCart } from '../../context/cartContext';

const GrantSetupStep = () => {
  const { data, setData, stepTracker, throttle, setThrottle } =
    useContext(GrantSetupContext);
  const { cryptoAccounts } = useCart();
  const [wordCnt, setWordCnt] = useState(0);
  const [content, setContent] = useState('');
  const [values, setValues] = useState();
  const [wrongUrl, setWrongUrl] = useState(false);
  const [uniqueId, setUniqueID] = useState(
    () => 'select_' + Math.random().toFixed(5).slice(2)
  );

  const setTextareaContent = useCallback((e) => {
    let temp = e.target.value.trim().split(' ').filter(Boolean);

    if (temp.length >= 200) {
      setContent(temp.slice(0, 200).join(' '));
      setWordCnt(200);
    } else {
      setWordCnt(temp.length);
      setContent(e.target.value);
    }
  }, []);

  const DropdownIndicator = (state) => {
    return (
      <components.DropdownIndicator {...state}>
        <div>
          <img src={DropDown} alt="dropdown-icon" />
        </div>
      </components.DropdownIndicator>
    );
  };

  const MultiValueContainer = ({ selectProps, data }) => {
    const values = selectProps.value;
    if (values) {
      return values[values.length - 1].label === data.label
        ? data.label
        : data.label + ',  ';
    } else {
      return '';
    }
  };

  const animatedComponents = makeAnimated();

  const labelStyles = {
    container: (styles) => ({
      display: 'flex',
      paddingLeft: 0,
      marginLeft: -10,
    }),
    control: (styles, state) => ({
      // height: state.hasValue ? 'auto' : setTimeout(() => 0, 1000),
      minHeight: 0,
      width: '100%',
      display: 'flex',
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
      };
    },

    multiValue: (styles, { data }) => {
      return {
        ...styles,
        color: '#fafafa',
        backgroundColor: 'none',
        marginBottom: '5px',
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
    return {
      container: (styles) => ({
        paddingLeft: 0,
      }),
      option: (provided, state) => {
        return {
          color: state.isSelected || state.isFocused ? '#2d2b6f' : '#808080',
          padding: 10,
          fontWeight: 500,
          cursor: 'pointer',
        };
      },
      control: (provided, state) => {
        return {
          border:
            throttle[0] === 1 && data.tags.length === 0
              ? '2px solid #b33a3a'
              : 'none',

          // borderWidth: 0,
          minHeight: '35px',
          borderRadius: 6,
          backgroundColor: '#f4f4f4',
          display: 'flex',
          color: '#808080',
          fontSize: '14px',
          fontWeight: 500,
          width: 'calc(100% - 11px)',
          zIndex: 999,
          cursor: 'pointer',
        };
      },
      singleValue: (provided, state) => {
        return {
          color: '#ffffff',
          fontWeight: 500,
          zIndex: 999,
        };
      },
      menu: (provided, state) => {
        const { menuIsOpen } = state.selectProps;

        return {
          position: 'absolute',
          width: '40%',
          color: state.selectProps.menuColor,
          backgroundColor: '#fff',
          boxShadow: '0px 0px 20px -5px rgba(0, 0, 0, 0.25)',
          borderRadius: 4,
          transition: 'all 0.8s ease-in-out',

          zIndex: 9999,
        };
      },
      menuList: (provided, state) => {
        return {
          maxHeight: '180px',
          overflowY: 'auto',
          '::-webkit-scrollbar': {
            width: '6px',
            height: '0px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#808080',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        };
      },
      dropdownIndicator: (provided, state) => {
        const { menuIsOpen } = state.selectProps;

        return {
          position: 'relative',
          right: '8px',
          bottom: '2px',

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
        };
      },
      valueContainer: (provided, state) => {
        return {
          ...provided,

          alignItems: 'center',
          display: '-webkit-box',
          padding: '2px 8px',
          width: '100%',
        };
      },
    };
  };

  return (
    <Container className="grant-setup-steps">
      <Row className="h1">Setup</Row>
      <Row className="grant-setup-top">
        <Col xs={12} xl={7}>
          <Row className="grant-setup-tag">Name*</Row>
          <Row>
            <textarea
              style={{
                border:
                  throttle[0] === 1 && data.name === ''
                    ? '2px solid #b33a3a'
                    : 'none',
              }}
              className="textarea"
              id="description"
              value={data.name}
              onInput={(e) => {
                setTextareaContent(e);
                setData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
              onPaste={(e) => {
                wordCnt >= 200 ? e.preventDefault() : setTextareaContent(e);
              }}
            ></textarea>
          </Row>
          <Row
            style={{ color: wordCnt >= 200 ? '#dc3545' : null }}
            className="wordCount"
          >
            {wordCnt}/200
          </Row>
          {throttle[0] === 1 && data.name === '' ? (
            <Row className="grant-warning-text">
              Name is required for the created grant.
            </Row>
          ) : null}
        </Col>
        <Col className="grant-image">
          <Row className="grant-setup-tag">Grant Image</Row>
          <Row>
            <div className="grant-setup-upload">
              <UploadFiles />
            </div>
          </Row>
        </Col>
      </Row>
      <div className="grant-setup-bottom">
        <Row className="grant-setup-tag">Grant Website</Row>
        <Row>
          <input
            className="input"
            value={data.website}
            onChange={(e) => {
              setData({ ...data, website: e.target.value });
            }}
          />
        </Row>
        <Row className="grant-setup-tag">
          Repository Link (Github or Bitbucket URL)*
        </Row>
        <Row>
          <input
            style={{
              border:
                throttle[0] === 1 && data.url === ''
                  ? '2px solid #b33a3a'
                  : 'none',
            }}
            className="input"
            value={data.url}
            onBlur={(e) => {
              data.url.includes('github') || data.url.includes('bitbucket')
                ? setWrongUrl(false)
                : setWrongUrl(true);
            }}
            onChange={(e) => {
              setData({ ...data, url: e.target.value });
            }}
          />
          {throttle[0] === 1 && data.url === '' ? (
            <Row className="grant-warning-text">
              Repository Link is required for the created grant.
            </Row>
          ) : null}
          {wrongUrl && data.url !== '' ? (
            <Row className="grant-warning-text">
              Invalid Github or Bitbucket URL
            </Row>
          ) : null}
        </Row>
        <Row className="grant-setup-tag">
          Select the wallet to recieve funds{' '}
        </Row>
        <Row>
          <select
            className="input"
            defaultValue={data.payment}
            onChange={(e) => {
              setData({
                ...data,
                payment: {
                  ...cryptoAccounts.find((item) => item._id === e.target.value),
                },
              });
            }}
            style={{
              border:
                throttle[0] === 1 && data.payment.walletName === ''
                  ? '2px solid #b33a3a'
                  : 'none',
            }}
          >
            <option value="">Select Wallet</option>
            {cryptoAccounts.length > 0 &&
              cryptoAccounts.map((account, idx) => (
                <option value={account._id} key={`${idx}`}>
                  {account.walletAddress
                    ? `${account.walletName} ${account.walletAddress.slice(
                        0,
                        4
                      )}...${account.walletAddress.slice(-6)}`
                    : `${account.walletName} ... ${account.pubKeyAddress.slice(
                        -10
                      )}`}
                </option>
              ))}
          </select>
          {throttle[0] === 1 && data.payment == {} ? (
            <Row className="grant-warning-text">
              Wallet is needed to recieve payments.
            </Row>
          ) : null}
        </Row>
        <Row className="grant-setup-tag">Tags*</Row>
        <Row className="">
          <Select
            isMulti
            placeholder={''}
            isSearchable={false}
            value={data.tagValues}
            onChange={(e) => {
              setData({ ...data, tags: e.map((e) => e.label), tagValues: e });
            }}
            options={options}
            styles={labelStyles}
            components={animatedComponents}
          />
        </Row>
        <Row>
          <CreatableSelect
            id={uniqueId}
            isMulti
            closeMenuOnSelect={false}
            maxMenuHeight={500}
            value={data.tagValues}
            placeholder={
              'Please select from the dropdown, or press Enter to save custom tags...'
            }
            onMenuClose={() => {
              const menuEl = document.querySelector(
                `#${uniqueId} .grant-setup-dropdownMenu`
              );
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
              setData({ ...data, tags: e.map((e) => e.label), tagValues: e });
            }}
            components={{
              DropdownIndicator,
              IndicatorSeparator: () => null,
              MultiValueContainer,
              Menu: (props) => (
                <components.Menu
                  {...props}
                  className="grant-setup-dropdownMenu"
                />
              ),
            }}
            options={options}
            styles={dropdownStyles()}
            classNamePrefix="grant-setup-dropdown"
          />
          {throttle[0] === 1 && data.tags.length === 0 ? (
            <Row className="grant-warning-text">
              At least 1 tag is required for the created grant.
            </Row>
          ) : null}
        </Row>
      </div>
    </Container>
  );
};

export default GrantSetupStep;
