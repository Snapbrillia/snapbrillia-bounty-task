import Dropdown from 'react-bootstrap/Dropdown';
import {
  Stytch,
  SDKProductTypes,
  OAuthProvidersTypes,
  OneTapPositions,
} from '@stytch/stytch-react';

export default function DropDownLogin(props) {
  const loginOrSignupViewConfig = {
    oauthOptions: {
      loginRedirectURL: process.env.REACT_APP_URL + '/login',
      signupRedirectURL: process.env.REACT_APP_URL + '/login',
      providers: [
        {
          position: OneTapPositions.embedded,
          one_tap: true,
          type: OAuthProvidersTypes.Google,
        },
      ],
    },
    emailMagicLinksOptions: {
      createUserAsPending: true,
      loginExpirationMinutes: 30,
      loginRedirectURL: process.env.REACT_APP_URL + '/login',
      signupExpirationMinutes: 30,
      signupRedirectURL: process.env.REACT_APP_URL + '/login',
    },
    products: [SDKProductTypes.emailMagicLinks, SDKProductTypes.oauth],
  };

  return (
    <Dropdown.Menu className="dropdown-menu-nav-bar dropdown-menu-end drop-downs-sm-right-auto-profile">
      <Dropdown.Header className="dropdown-header-nav-bar">
        <Stytch
            loginOrSignupView={loginOrSignupViewConfig}
            publicToken={process.env.REACT_APP_STYTCH_PUBLIC_TOKEN}
            style={{
              width: '300px',
              primaryColor: '#106ee9',
            }}
          />
      </Dropdown.Header>
    </Dropdown.Menu>
  );
}
