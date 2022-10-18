/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import image from '../../assets/icon/snapbrillia_team_page_illustration.png';

import '../../shared/css/buttonStyles.css';
import '../css/teamsHeader.css';

const teamsHeader = () => (
  <Container fluid>
    <Row>
      <Col xs={12} md={7}>
        <Row className="teams_header_title">Work</Row>
        <Row className="teams_header_context">
          Checkout your work! Collaborate with your teammates and cash out your
          completed bounties below. You're all set to make an impact.
          {/* {
            'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah '
          } */}
        </Row>
      </Col>
      <Col xs={12} md={5} className="d-none d-sm-block text-center">
        <img src={image} />
      </Col>
    </Row>
  </Container>
);

export default teamsHeader;
