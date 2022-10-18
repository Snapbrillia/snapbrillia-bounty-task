import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../shared/css/bgColors.css';
import './css/policyView.css';
import '../shared/css/sharedStyles.css';
import SnapbrilliaLogo from '../assets/snapbrillia_logo.svg';
import SnapbrilliaClose from '../assets/icon/snapbrillia_close_icon.svg';
import TermsOfServiceSideMenu from '../shared/menus/termsOfServiceSideMenu';

import TermsOfUseText from './components/termsOfUseText';
import GeneralPolicyText from './components/generalPolicyText';
import CookiePolicyText from './components/cookiePolicyText';
import EuPolicyText from './components/euPolicyText';
import DataProcessPolicyText from './components/dataProcessPolicyText';
import VulnerabilityPolicyText from './components/vulnerabilityPolicyText';
import CaPolicyTest from './components/caPolicyTest';

const Policy = () => {
  const [policy, setPolicy] = useState(0);
  const [title, setTitle] = useState('Use Policies');

  const policyText = [
    <TermsOfUseText />,
    <GeneralPolicyText />,
    <CookiePolicyText />,
    <CaPolicyTest />,
    <EuPolicyText />,
    <DataProcessPolicyText />,
    <VulnerabilityPolicyText />,
  ];

  return (
    <>
      <Container className="primarybg" fluid>
        <Row className=" full-page">
          <Col md={2}>
            <Row>
              <Col>
                <img src={SnapbrilliaLogo} alt="snapbrillia logo" />
              </Col>
            </Row>
            <Row className="policy-side-bar">
              <Col>
                <TermsOfServiceSideMenu
                  setTitle={setTitle}
                  setPolicy={setPolicy}
                />
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Col>
          <Col className="pagemainbg policy-main-content" md={10}>
            <Row>
              <Col xs={11}>
                <p className="policy-text-left policy-page-title-text">
                  {title}
                </p>
              </Col>
              <Col xs={1} className="policy-close-button">
                <img
                  src={SnapbrilliaClose}
                  alt="close-icon"
                  onClick={() => window.history.back()}
                />
              </Col>
            </Row>
            <Row>
              <Col>{policyText[policy]}</Col>
            </Row>

            {/* <Row>
              <Col></Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
