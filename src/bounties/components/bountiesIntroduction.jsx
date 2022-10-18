import React from 'react';

//Components
import { Row, Col, Container } from 'react-bootstrap';
import AboutRepo from './aboutRepo';

//Icons
import CheckIcon from '../../assets//icon/snapbrillia_check_icon.svg';
import Logo from '../../assets/snapbrillia_logo.svg';

const BountiesIntroduction = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={12} md={1}>
          <img src={Logo} alt="snapbrillia-logo" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center col-12">
          <img src={CheckIcon} alt="check-icon" />
          <span className="primary fs-3 medium ms-2">
            Perfect! Let`&#39`s Finalize your bounty
          </span>
        </Col>
        <Col>
          <span className="primary fs-4 medium d-block my-4">
            Now let `s go trough and create your first Bounty in order to add
            your Candidates
          </span>
        </Col>
        <AboutRepo />
      </Row>
    </Container>
  );
};

export default BountiesIntroduction;
