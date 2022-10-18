import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

//CSS
import '../../shared/css/typography.css';
import '../css/teamSummaryProfile.css';

const TeamSummaryDescription = ({ bounty }) => {
  return (
    <Container fluid>
      <Row>
        <Col><div dangerouslySetInnerHTML={{__html: bounty.taskDescription}} /></Col>
      </Row>
      <Row>
        <Col className='my-3'>
          <strong>Submission Requirements:</strong>
        </Col>
      </Row>
      <Row>
        <Col>{bounty.submissionRequirements}</Col>
      </Row>
      <Row>
        <Col className='my-3'>
          <strong>Acceptence Criteria:</strong>
        </Col>
      </Row>
      <Row>
        <Col>{bounty.acceptenceCriteria}</Col>
      </Row>
      <Row>
        <Col className='my-3'>
          <strong>Important Links:</strong>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>{bounty.importantLink}</Col>
      </Row>
    </Container>



  );
};

export default TeamSummaryDescription;
