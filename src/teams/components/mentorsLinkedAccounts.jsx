import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../context/authContext';

import '../css/mentorsLinkedAccounts.css';
import 'bootstrap/dist/css/bootstrap.css';
import Google from '../../assets/icon/snapbrillia_google_actual_icon.png';
import LinkedIn from '../../assets/icon/snapbrillia_linkedin_icon.png';
import Discord from '../../assets/icon/snapbrillia_discord_icon.png';
import Github from '../../assets/icon/snapbrillia_github_actual_icon.png';

const MentorsLinkedAccounts = ({ user, bounty }) => {
  const { linkAccount } = useAuth();

  const [externalPopup, setExternalPopup] = useState(null);

  useEffect(() => {
    if (!externalPopup) {
      return;
    }

    const timer = setInterval(() => {
      if (!externalPopup) {
        timer && clearInterval(timer);
        return;
      }
      const currentUrl = externalPopup.location.href;
      if (!currentUrl) {
        return;
      }
      const searchParams = new URL(currentUrl).searchParams;
      const tokenType = searchParams.get('stytch_token_type');
      const token = searchParams.get('token');
      if (token && tokenType) {
        externalPopup.close();
        linkAccount(token, tokenType)
          .finally(() => {
            setExternalPopup(null);
            timer && clearInterval(timer);
          })
      }
    }, 500)
  },
  [externalPopup]);

  const connectClick = (type) => (e) => {
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;
    const title = `Account Link`;
    let url ;
    url = `${process.env.REACT_APP_STYTCH_URL}/v1/public/oauth/${type}/start?public_token=${process.env.REACT_APP_STYTCH_PUBLIC_TOKEN}`;
    url += '&login_redirect_url=' + encodeURIComponent(process.env.REACT_APP_URL + '/link-account');
    url += '&signup_redirect_url=' + encodeURIComponent(process.env.REACT_APP_URL + '/link-account');
    if (type === 'github') {
        url += '&custom_scopes=' + encodeURIComponent('user:email repo');
    }
    const popup = window.open(url, title, `width=${width},height=${height},left=${left},top=${top}`);
    setExternalPopup(popup);
  }

  return (
    <Container fluid>
      <Row className="mentors-linked-accounts-title">Linked Accounts</Row>
      {/* GitHub */}
      <Row className={`mentors-linked-accounts-row ${ user.githubId ? '' : 'pointer'}`} onClick={(e) => {
        if (!user.githubId) {
          connectClick('github')(e);
        }
      }}>
        <Col md={6}>
          <img
            src={Github}
            alt="github-icon"
            className="mentors-linked-accounts-icon"
          />{' '}
          <span className="mentors-linked-accounts-subtitle">Github</span>
        </Col>
        <Col md={6} className="mentors-linked-accounts-connect">
          <span className="mentors-linked-accounts-connect">
            {user.githubId ? (
              'Connected'
            ) : (
              <span className="text-muted">Not Connected</span>
            )}
          </span>
        </Col>
      </Row>
      <Row>
        {user.githubId ? (
            <Col xs={6}></Col>
          ) : (
            <Col xs={6} onClick={connectClick('github')}>
              <span className="mentors-linked-accounts-click">
                Click to connect account
              </span>
            </Col>
        )}
        <Col className="mentors-linked-accounts-line-below">
          <span>Your Github information will not be displayed publically.</span>
        </Col>
      </Row>
      {/* Google */}
      <Row className={`mentors-linked-accounts-row ${ user.googleId ? '' : 'pointer'}`} onClick={(e) => {
        if (!user.googleId) {
          connectClick('google')(e);
        }
      }}>
        <Col md={6}>
          <img
            src={Google}
            alt="google-icon"
            className="mentors-linked-accounts-icon"
          />{' '}
          <span className="mentors-linked-accounts-subtitle">Google</span>
          {/* <span className="mentors-linked-accounts-required">(required)</span> */}
        </Col>
        <Col md={6} className="mentors-linked-accounts-connect">
          <span className="mentors-linked-accounts-connect">
            {user.googleId ? (
              'Connected'
            ) : (
              <span className="text-muted">Not Connected</span>
            )}
          </span>
        </Col>
      </Row>
      <Row>
        {user.googleId ? (
            <Col xs={6}></Col>
          ) : (
            <Col xs={6} onClick={connectClick('google')}>
              <span className="mentors-linked-accounts-click">
                Click to connect account
              </span>
            </Col>
        )}
        <Col className="mentors-linked-accounts-line-below">
          <span>Your google information will not be displayed publically.</span>
        </Col>
      </Row>
      {/* LinkedIn */}

      <Row className={`mentors-linked-accounts-row ${ user.linkedinId ? '' : 'pointer'}`} onClick={(e) => {
        if (!user.linkedinId) {
          connectClick('linkedin')(e);
        }
      }}>
        <Col md={6}>
          <img
            src={LinkedIn}
            alt="LinkedIn-icon"
            className="mentors-linked-accounts-icon"
          />{' '}
          <span className="mentors-linked-accounts-subtitle">LinkedIn</span>
        </Col>
        <Col md={6} className="mentors-linked-accounts-connect">
          <span className="mentors-linked-accounts-connect">
            {user.linkedinId ? (
              'Connected'
            ) : (
              <span className="text-muted">Not Connected</span>
            )}
          </span>
        </Col>
      </Row>
      <Row>
        {user.linkedinId ? (
            <Col xs={6}></Col>
          ) : (
            <Col xs={6} onClick={connectClick('linkedin')}>
              <span className="mentors-linked-accounts-click">
                Click to connect account
              </span>
            </Col>
        )}
        <Col className="mentors-linked-accounts-line-below">
          <span>Your linkedin information will not be displayed publically.</span>
        </Col>
      </Row>
      {/* Discord */}
      <Row className={`mentors-linked-accounts-row ${ user.discordId ? '' : 'pointer'}`} onClick={(e) => {
        if (!user.discordId) {
          connectClick('discord')(e);
        }
      }}>
        <Col md={6}>
          <img
            src={Discord}
            alt="discord-icon"
            className="mentors-linked-accounts-icon"
          />{' '}
          <span className="mentors-linked-accounts-subtitle">Discord</span>
        </Col>
        <Col md={6} className="mentors-linked-accounts-connect">
          <span className="mentors-linked-accounts-connect">
            {user.discordId ? (
              'Connected'
            ) : (
              <span className="text-muted">Not Connected</span>
            )}
          </span>
        </Col>
      </Row>
      <Row>
        {user.discordId ? (
            <Col xs={6}></Col>
          ) : (
            <Col xs={6} onClick={connectClick('discord')}>
              <span className="mentors-linked-accounts-click">
                Click to connect account
              </span>
            </Col>
        )}
        <Col className="mentors-linked-accounts-line-below">
          <span>Your Discord information will not be displayed publically.</span>
        </Col>
      </Row>
    </Container>
  );
};

export default MentorsLinkedAccounts;
