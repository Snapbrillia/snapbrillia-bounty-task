import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../css/teamsReview.css';

const TeamsReview = ({team, cashout}) => {
  return (
    <Container
      style={{
        paddingTop: '40px',
        paddingLeft: '40px',
        paddingRight: '60px',
        paddingBottom: '40px',
      }}
      fluid
    >
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} xl={10} xxl={10}>
          <Row className="teams_review_congratulation">
            <p>Congratulations, {team.mentor?.fullName}! </p>
          </Row>
          <Row
            className="teams_review_content"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            <p>
              You and your team just finished{' '}
              <span style={{ color: '#2D2B6F' }}>
                {team.bountyId?.name}{' '}
              </span>
              {'\n'}Check out your reward and consider giving back to your team
              for their hard work!
            </p>
          </Row>
          <Row className="teams_review_share" style={{ marginTop: '26px' }}>
            <p>
              Sharing with your team will help build trust within the community
            </p>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={2} xxl={2}>
          <Row>
            <Col>
              <Row className="teams_review_reward">
                <p>Your reward is...</p>
              </Row>
              <Row className="teams_review_reward_content">
                <p>${parseInt(team.bountyId?.rewardAmount).toLocaleString('en-US')}</p>
              </Row>
              <Row className="teams_review_reward_subcontent">
                <p>{parseInt(team.bountyId?.rewardAmount).toLocaleString('en-US')} ADA</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {!team.rewarded && (
                <div style={{ display: 'flex', marginTop: '26px' }}>
                  <button
                    className="teams_review_button col-md-12"
                    style={{
                      border: 'none',
                      alignItems: 'center',
                      marginLeft: 'auto',
                    }}
                    onClick={cashout}
                  >
                    <span className="teams_review_button_text">Cash Out</span>
                  </button>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamsReview;
