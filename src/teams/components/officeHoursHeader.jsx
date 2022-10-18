import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamMentorIllustration from '../../assets/illustrations/snapbrillia_mentor_personal info_3D.svg';

import '../css/teamMentorHeader.css';

export default function officeHoursHeader() {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} sm={12} md={7}>
          <Row>
            <div className="mentor-page-header">
              Scheduling Office Hours
              <br />
            </div>
          </Row>
          <Row>
            <div className="team-mentor-note">
              Here you can create and schedule office hours where your mentees
              can come to you to talk and/or work over problems. <br />
              These meetings will be built in Google Meets and posted to your
              Google Calender.
            </div>
            <p></p>
            <div className="team-mentor-note">
              Although <strong>optional</strong>, mentors with office hours are
              three times more likely to succeed!
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
