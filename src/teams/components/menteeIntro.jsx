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
              What it means to be a Mentee
              <br />
            </div>
          </Row>
          <Row>
            <Col>
              <span className="p-0" style={{ color: '#808080' }}>
                <div className="small-text medium">
                  If you’re looking to learn by working on a real world project,
                  you’ve come to the right place! As a mentee, you’ll be able to
                  join a team of other mentees led by a mentor for a more
                  personal and guided learning experience.
                </div>
                <div className="small-text medium">
                  <p></p>
                  This is an <u style={{ fontWeight: 'bold' }}>unpaid opportunity</u> but by
                  participating in these gigs you’ll be able to gain valuable
                  and verified experience.
                </div>
                <p></p>
                <div className="small-text medium">
                  You are joining a team for the bounty titled:
                  <p className="paragraph-bold"> {bounty.name}</p>
                </div>
              </span>
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
