import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/teamList.css';
import { UserImage } from '../../shared/images';

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

function TeamList({team}) {
  return (
    <Container fluid className="team-list-component">
      <Row className="mentor-bg">
        <Row className="mentor-container">
          <Col md={4} className="mentee-list-col-spaceing">
            <img
              src={UserImage(team.mentor)}
              className="mentee-list-logo align-self-center"
              alt="MentorImg"
            ></img>
          </Col>
          <Col md={4}>
            <p className="name">{team.mentor?.fullName}</p>
            <p className="title">Mentor</p>
          </Col>

          <Col>
            <a href="add the link">{team.mentor?.discord}</a>
            <p className="title">Discord</p>
          </Col>
          <Col>
            <a href="add the link">{team.mentor?.linkedin}</a>
            <p className="title">Linkedin URL</p>
          </Col>
          <Col>
            <a href="add the link">{team.mentor?.github}</a>
            <p className="title">Github URL</p>
          </Col>
        </Row>
        <Row className="office-hour-component">
          <Row className="small-text team-profile-officehour-title mentor-office-hour-align">
            Office Hours
          </Row>
          <Row className="mentor-office-hour-align">
            <Stack direction="horizontal" gap={5}>
              <div>
                <Row className="small-text team-profile-small-text">
                  {testOfficeHour[0].date}
                </Row>
                <Row className="primary team-profile-officehour">
                  {testOfficeHour[0].time}
                </Row>
              </div>
              <div>
                <Row className="small-text team-profile-small-text">
                  {testOfficeHour[1].date}
                </Row>
                <Row className="primary team-profile-officehour">
                  {testOfficeHour[1].time}
                </Row>
              </div>
              <div>
                <Row className="small-text team-profile-small-text">
                  {testOfficeHour[2].date}
                </Row>
                <Row className="primary team-profile-officehour">
                  {testOfficeHour[2].time}
                </Row>
              </div>
              <div>
                <Row className="small-text team-profile-small-text">
                  {testOfficeHour[3].date}
                </Row>
                <Row className="primary team-profile-officehour">
                  {testOfficeHour[3].time}
                </Row>
              </div>
              <div>
                <u>Join Meeting </u>
              </div>
            </Stack>
          </Row>
        </Row>
      </Row>
      <Row className="mentee-list-container-large">
        { team.mentees?.length > 0 && (
          team.mentees.map((mentee, idx) => {
            return (
              <Row className="mentee-list-container" key={idx}>
                <Col md={4} className="mentee-list-col-spaceing">
                  <img
                    src={UserImage(mentee)}
                    className="mentee-list-logo align-self-center"
                    alt="MentorImg"
                  ></img>
                </Col>
                <Col md={4}>
                  <p className="name">{mentee?.fullName}</p>
                  <p className="title">Mentee</p>
                </Col>

                <Col>
                  <a href={mentee?.discord}>{mentee?.discord}</a>
                  <p className="title">Discord</p>
                </Col>
                <Col>
                  <a href={mentee?.linkedin}>{mentee?.linkedin}</a>
                  <p className="title">Linkedin URL</p>
                </Col>
                <Col>
                  <a href={mentee?.github}>{mentee?.github}</a>
                  <p className="title">Github URL</p>
                </Col>
              </Row>)
            })
          )
        }
      </Row>
    </Container>
  );
}

export default TeamList;
