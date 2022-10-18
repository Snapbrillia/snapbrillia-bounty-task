import { Container, Row, Col, Badge } from 'react-bootstrap';
import '../css/teamsSummary.css';

function TeamsSummary() {
  return (
    <Container className="p-0">
      <Row className="align-items-center">
        <Col xs={6} lg={3}>
          <p className="team-paragraph-small">Languages</p>
          <Badge pill bg="none" className="language-button">
            React
          </Badge>
          <Badge pill bg="none" className="language-button">
            JavaScript
          </Badge>
          <Badge pill bg="none" className="language-button">
            Web3.js
          </Badge>
        </Col>
        <Col xs={6} lg={2}>
          <span className="grey-title d-block">Experience Level</span>
          <span className="medium">1-3 Years</span>
        </Col>
        <Col xs={12} lg={2} className="my-4 m-lg-0">
          <span className="grey-title d-block">Office Hours</span>
          <span className="medium">Available</span>
        </Col>
        <Col xs={12} lg={5} className="cardbg p-4 rounded">
          <Row>
            <Col>
              <span className="grey-title d-block medium">
                On - Chain Reputation
              </span>
              <span className="medium link">Click here to View</span>
            </Col>
            <Col>
              <span className="grey-title d-block medium">Resume</span>
              <span className="medium link">Click here to View</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamsSummary;
