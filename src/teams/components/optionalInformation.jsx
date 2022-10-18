import { Container, Row, Col } from 'react-bootstrap';
import OffChainResume from './offChainResume';
import OnChainResume from './onChainResume';

export default function OptionalInformation() {
  return (
    <Container>
      <Row className="mb-2 container">
        <Col className="ms-1">
          <h3 className="bold fs-2">Optional Information</h3>
          <p className="small-text">
            Press the check marks for the information you want to include for
            your mentees to see.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="p-4">
          <OffChainResume />
        </Col>
        <Col className="p-4">
          <OnChainResume />
        </Col>
      </Row>
    </Container>
  );
}
