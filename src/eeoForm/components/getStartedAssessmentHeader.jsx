import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChallenageIcon from '../../assets/icon/snapbrillia_challenge_icon.svg';
import ClockIcon from '../../assets/icon/snapbrillia_clock_icon.svg';
import '../css/eeoFormComponents.css';
import '../../shared/css/typography.css';

const GetStartedAssessmentHeader = ({ minutes, challenges }) => {
  return (
    <Container className="main">
      <Row>
        <Col className="assessment">
          <span className="h1">Results</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="rightPad" src={ClockIcon} alt="svg clock" />
          <span className="policy_typography">{minutes} Minutes</span>
        </Col>
        <Col>
          <img className="rightPad" src={ChallenageIcon} alt="svg challenge" />
          <span className="policy_typography">{challenges} Challenges</span>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStartedAssessmentHeader;
