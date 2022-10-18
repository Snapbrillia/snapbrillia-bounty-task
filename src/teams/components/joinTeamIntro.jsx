import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mentee from '../../assets/illustrations/snapbrillia_mentor_mentee_illustration.svg';

export default function menteeIntro({ bounty }) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <Row>
            <div className="mentor-page-header">
              Choosing a Team
              <br />
            </div>
          </Row>
          <Row>
            <Col>
              <div className="small-text medium">
                A tip to choose your teams wisely: Select teams with mentors who
                are proficient in the skills you want to learn and have matching
                time preferences.
              </div>
              <div className="small-text medium">
                <p></p>
                Remember these are real people! The connections you make here,
                with your mentor and/or other teammates, can be just as valuable
                as the reputation you gain from participating in the gig.
              </div>
              <p></p>
              <div className="small-text medium">
                You are joining a team for the bounty titled:
                <p className="paragraph-bold"> {bounty.name}</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-md-inline">
          <img src={Mentee} className="float-end" alt="mentee" />
        </Col>
      </Row>
    </Container>
  );
}
