import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/eeoFormComponents.css';
import '../../shared/css/typography.css';

const GetStartedAssessmentHelp = () => {
  return (
    <Container className="mainHelp">
      <Row>
        <Col className="helpPad">
          <span className="h1">Help</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="policy_typography text">
            If you require accommodations for special arrangements in order to
            complete the assessment inform your <a href="">asessment sponsor</a>{' '}
            and they will try to provide support.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStartedAssessmentHelp;
