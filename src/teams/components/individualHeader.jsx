import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamMentorIllustration from '../../assets/illustrations/snapbrillia_mentor_personal info_3D.svg';

import '../css/teamMentorHeader.css';

export default function IndividualHeader({ bounty }) {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} sm={12} md={7}>
          <Row>
            <div className="mentor-page-header">
              Taking on bounties as an individual <br />
            </div>
          </Row>
          <Row>
            <div className="team-mentor-note">
              As an individual, you an the lead in completing available bounties
              independently. Establish yourself as a self starter, be in control
              of taking on bounties of interest solo, and getting paid for
              completed bounties. Play a major part in making an impactful
              statement among others in the dev community.
            </div>
          </Row>
          <Row>
            <div className="bounty-note">
              You are creating a team for the bounty titled:
              <span> </span>
              <a className="bounty-title font-weight-bold" href="#">
                {bounty?.name}
              </a>
            </div>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={5} className="d-none d-md-block ">
          <div>
            <img
              src={TeamMentorIllustration}
              alt="team_mentor_illustration"
              className="mentor-page-illus"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
