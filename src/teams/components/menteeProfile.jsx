import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/menteeProfile.css';

const profilePhoto =
  'https://via.placeholder.com/500x500.png?text=Placeholder+Image';

const testOfficeHour = [
  {
    date: 'Monday',
    time: '9:00am - 10:00am',
  },
  {
    date: 'Tuesday',
    time: '9:00am - 10:00am',
  },
  {
    date: 'Wednesday',
    time: '9:00am - 10:00am',
  },
  {
    date: 'Sunday',
    time: '9:00am - 10:00am',
  },
];

function menteeProfile() {
  return (
    <Container fluid className="mentee-profile-component-bg">
      <Row>
        <Col xs={3} md={1}>
          <img src={profilePhoto} className="mentee-profile-picture" />
        </Col>
        <Col xs={9} md={3}>
          <Row className="primary mentee-profile-name mentee-profile-align">
            Dennis Makuyev
          </Row>
          <Row className="small-text mentee-profile-small-text mentee-profile-align">
            Mentor
          </Row>
        </Col>
        <Col xs={12} sm={12} md={2}>
          <Row className="mentee-profile-url mentee-profile-align">
            Dennis#4498
          </Row>
          <Row className="small-text mentee-profile-small-text mentee-profile-align">
            Discord
          </Row>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <Row className="mentee-profile-url mentee-profile-align">
            linkedin.com/dennis
          </Row>
          <Row className="small-text mentee-profile-small-text mentee-profile-align">
            LinkedIn URL
          </Row>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <Row className="mentee-profile-url mentee-profile-align">
            github.com/dennis
          </Row>
          <Row className="small-text mentee-profile-small-text mentee-profile-align">
            Github URL
          </Row>
        </Col>
      </Row>
      <Row className="small-text mentee-profile-officehour-title mentee-profile-align">
        Office Hours
      </Row>
      <Row className="mentee-profile-align">
        <Col xs={6} md={2}>
          <Row className="small-text mentee-profile-small-text">
            {testOfficeHour[0].date}
          </Row>
          <Row className="primary mentee-profile-officehour">
            {testOfficeHour[0].time}
          </Row>
        </Col>
        <Col xs={6} md={2}>
          <Row className="small-text mentee-profile-small-text">
            {testOfficeHour[1].date}
          </Row>
          <Row className="primary mentee-profile-officehour">
            {testOfficeHour[1].time}
          </Row>
        </Col>
        <Col xs={6} md={2}>
          <Row className="small-text mentee-profile-small-text">
            {testOfficeHour[2].date}
          </Row>
          <Row className="primary mentee-profile-officehour">
            {testOfficeHour[2].time}
          </Row>
        </Col>
        <Col xs={6} md={2}>
          <Row className="small-text mentee-profile-small-text">
            {testOfficeHour[3].date}
          </Row>
          <Row className="primary mentee-profile-officehour">
            {testOfficeHour[3].time}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default menteeProfile;
