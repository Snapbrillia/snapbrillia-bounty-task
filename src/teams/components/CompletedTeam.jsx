import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from '@reach/router';
// import "../shared/css/typography.css";
import '../css/CompletedTeamComponent.css';
import { UserImage } from '../../shared/images';

export default function TeamComponent({ team }) {
  return (
    <Container className="teams-box" fluid>
      <Row>
        <Col xs={8} className="box-header pt-4">
          {team.bountyId?.name}
        </Col>
        <Col className="text-end pt-4 right-side">
          <div className="light-gray-text">Bounty Status</div>
          <div className="bold-black-text">{team.bountyId?.status}</div>
        </Col>
      </Row>
      <Row className="second-row">
        <Col className="left-side" xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="light-gray-text">Bounty Reward</div>
          <div className="bold-black-text">${parseInt(team.bountyId?.rewardAmount).toLocaleString('en-US')} USD</div>
          <div className="light-gray-text pt-4">Total Code Commits</div>
          <div className="bold-black-text">40</div>
          <div className="light-gray-text pt-4">Pull Requests</div>
          <div className="bold-black-text">3</div>
        </Col>

        <Col
          className="text-end right-side"
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        >
          <div className="mentee-pics">
            <img
              style={{ marginRight: '7px', marginBottom: '20px' }}
              src={UserImage(team.mentor)}
              className="profile-pictures"
              alt="profile-logo"
            />
            <span className="mentor-name">
              {team.mentor?.fullName}
              <div className="light-gray-text">Team Mentor</div>
            </span>
          </div>
          <div
            sm={4}
            xs={2}
            className="light-gray-text pt-3 pb-2 text-end"
          >
            Mentees ({team.mentees?.length || 0})
          </div>
          <Row className="mentee-section">
            { team.mentees?.length > 0 && (
              team.mentees.map((mentee, idx) => {
                return (
                  <Col key={idx} xs={4} className="mentee-info">
                    <img
                      src={UserImage(mentee)}
                      className="profile-pictures"
                      alt={mentee.fullName}
                    />
                    <p className="mentee-names">{mentee.fullName}</p>
                  </Col>)
                })
              )
            }
          </Row>
          <Row className="link-text">
            <Link style={{ color: '#000000' }} to={`/completed-teams/${team._id}`}>
              See Details
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
