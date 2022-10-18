import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamMentorIllustration from '../../assets/illustrations/snapbrillia_mentor_personal info_3D.svg';

import '../css/teamMentorHeader.css';

export default function TeamMentorHeader({ bounty }) {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} sm={12} md={7}>
          <Row>
            <div className="mentor-page-header">
              What it means to be a Mentor <br />
            </div>
          </Row>
          <Row>
            <div className="team-mentor-note">
              If you’re looking for a chance to develop yourself as a leader,
              you’ve come to the right place! As a mentor, you get to lead a
              team of mentees who want to learn from you.
            </div>
            <p></p>
            <div className="team-mentor-note">
              Get paid for gigs while developing your reputation as a leader,
              making a big impact on your mentees and in the open source
              community!
            </div>
          </Row>
          <Row>
            <div className="bounty-note">
              Create a team for:
              <span> </span>
              <a className="bounty-title" href="#">
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
