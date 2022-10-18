import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profilephoto from '../../assets/profile-photo.jpeg';

//COMPONENTS
import TeamSummaryDescription from './teamSummaryDescription';

//CSS
import '../../shared/css/textColors.css';
import '../css/teamSummaryProfile.css';
import '../../shared/css/bgColors.css';

const TeamSummaryProfile = () => {
  return (
    <Container className="p-2">
      <Row>
        <Col xs={4} sm={5} md={3} lg={2} className="p-0">
          <img
            src={profilephoto}
            alt="team"
            height={150}
            width={150}
            style={{ borderRadius: '50%' }}
          />
        </Col>
        <Col xs={3} sm={7} md={2} lg={2} className="mt-3">
          <span className="grey-title d-block">Full Name</span>
          <span className="medium">Dennis Makuyev</span>
        </Col>
        <Col xs={3} className="mt-3">
          <span className="grey-title d-block">Location</span>
          <span className="medium">New York City(10:37pm)</span>
        </Col>
        <Col className="cardbg rounded p-4 mb-4 mt-3 mt-lg-0">
          <span className="grey-title d-block">Discord</span>
          <span className="primary medium d-block mb-5">Dennis #4498</span>
          <span className="grey-title d-block">LinkedIn URL</span>
          <span className="primary medium mb-5 d-block">
            www.linkedin.com/Dennis
          </span>
          <span className="grey-title d-block">Github URL</span>
          <span className="primary medium">www.github.com/Dennis</span>
        </Col>
        <Col xs={12} lg={6} className="summary-desc">
          <Row>
            <TeamSummaryDescription />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamSummaryProfile;
