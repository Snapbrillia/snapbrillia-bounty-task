import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Github from '../../assets/icon/snapbrillia_github_actual_icon.svg';
import Linkedin from '../../assets/icon/snapbrillia_linkedin_actual_icon.svg';
import Discord from '../../assets/icon/snapbrillia_discord_icon.png';
import Google from '../../assets/icon/snapbrillia_google_actual_icon.png';
import '../css/buttonComponent.css';
import { useAuth } from '../../context/authContext';

export default function ButtonComponent({ user }) {
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
        linkAccount(token, tokenType).finally(() => {
          setExternalPopup(null);
          timer && clearInterval(timer);
        });
      }
    }, 500);
  }, [externalPopup]);

  const connectClick = (type) => (e) => {
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;
    const title = `Account Link`;
    let url;
    url = `${process.env.REACT_APP_STYTCH_URL}/v1/public/oauth/${type}/start?public_token=${process.env.REACT_APP_STYTCH_PUBLIC_TOKEN}`;
    url +=
      '&login_redirect_url=' +
      encodeURIComponent(process.env.REACT_APP_URL + '/link-account');
    url +=
      '&signup_redirect_url=' +
      encodeURIComponent(process.env.REACT_APP_URL + '/link-account');
    if (type === 'github') {
      url += '&custom_scopes=' + encodeURIComponent('user:email repo');
    }
    const popup = window.open(
      url,
      title,
      `width=${width},height=${height},left=${left},top=${top}`
    );
    setExternalPopup(popup);
  };

  return (
    <Container className='p-0'>
      <Row className="my-3">
        <Col xs={12} md={6}>
          <Row className="button-component-card-border-radius bg-light p-2 mx-0 my-2">
            <Col xs={'auto'} md={'auto'} className="pt-1">
              <img src={Github} alt="github-icon" />
            </Col>
            <Col>
              <Row>
                <span className="ps-2 bold primary">Github</span>
              </Row>
              {!user.githubId && (
                <Row onClick={connectClick('github')}>
                  <span className="button-component-subtitle ps-2 text-muted">
                    Connect to active account.
                  </span>
                </Row>
              )}
            </Col>
            <Col>
              {user.githubId ? (
                <span className="float-end text-success medium pe-1">
                  Connected
                </span>
              ) : (
                <span className="float-end text-muted medium pe-1">
                  Not Connected
                </span>
              )}
            </Col>
          </Row>
          <Row className="button-component-card-border-radius bg-light p-2 mx-0 mt-3 mb-2">
            <Col xs={'auto'} md={'auto'} className="pt-1">
              <img src={Google} alt="bitbucket-icon" className="oauth-icon" />
            </Col>
            <Col>
              <Row>
                <span className="ps-2 bold primary">Google</span>
              </Row>
              {!user.googleId && (
                <Row onClick={connectClick('google')}>
                  <span className="button-component-subtitle ps-2 text-muted">
                    Connect to active account.
                  </span>
                </Row>
              )}
            </Col>
            <Col>
              {user.googleId ? (
                <span className="float-end text-success medium pe-1">
                  Connected
                </span>
              ) : (
                <span className="float-end text-muted medium pe-1">
                  Not Connected
                </span>
              )}
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className="button-component-card-border-radius bg-light p-2 mx-0 my-2">
            <Col xs={'auto'} md={'auto'} className="pt-1">
              <img src={Linkedin} alt="linkedIn-icon" />
            </Col>
            <Col>
              <Row>
                <span className="ps-2 bold primary">LinkedIn</span>
              </Row>
              {!user.linkedinId && (
                <Row onClick={connectClick('linkedin')}>
                  <span className="button-component-subtitle ps-2 text-muted">
                    Connect to active account.
                  </span>
                </Row>
              )}
            </Col>
            <Col>
              {user.linkedinId ? (
                <span className="float-end text-success medium pe-1">
                  Connected
                </span>
              ) : (
                <span className="float-end text-muted medium pe-1">
                  Not Connected
                </span>
              )}
            </Col>
          </Row>
          <Row className="button-component-card-border-radius bg-light p-2 mx-0 mt-3 mb-2">
            <Col xs={'auto'} md={'auto'} className="pt-1">
              <img
                src={Discord}
                alt="stackoverflow-icon"
                className="oauth-icon"
              />
            </Col>
            <Col>
              <Row>
                <span className="ps-2 bold primary">Discord</span>
              </Row>
              {!user.discordId && (
                <Row onClick={connectClick('discord')}>
                  <span className="button-component-subtitle ps-2 text-muted">
                    Connect to active account.
                  </span>
                </Row>
              )}
            </Col>
            <Col>
              <span className="float-end text-muted medium pe-1">
                {user.discordId ? (
                  <span className="float-end text-success medium pe-1">
                    Connected
                  </span>
                ) : (
                  <span className="float-end text-muted medium pe-1">
                    Not Connected
                  </span>
                )}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
