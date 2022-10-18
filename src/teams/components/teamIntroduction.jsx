import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import image from '../../assets/illustrations/snapbrillia_mentor_mentee_illustration.svg';

import '../../shared/css/buttonStyles.css';
import '../css/teamIntroduction.css';

const teamsIntroduction = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={7}>
          <Row className="teams_intro_title">{'What is a team?'}</Row>
          <Row className="teams_intro_context">
            {
              '-A mentee takes on bounties with a group not to get paid but to learn and add completed bounties to your resume.'
            }
          </Row>
          <Row className="teams_intro_context">
            {
              '-Work together and communicate with your team to complete bounties'
            }
          </Row>
          <Row className="teams_intro_context">
            {'-ITS IMPORTANT THAT YOU KNOW THAT YOU WILL NOT GET PAID'}
          </Row>
          <div className="teams_intro_context">
            You are joining a team for the bountry titled:{' '}
            <span className="teams_intro_bold">
              Improve Tool Tip and Clickable Links
            </span>
          </div>
        </Col>
        <Col xs={12} md={5} className="teams_intro_image">
          <img src={image} />
        </Col>
      </Row>
    </Container>
  );
};

export default teamsIntroduction;
