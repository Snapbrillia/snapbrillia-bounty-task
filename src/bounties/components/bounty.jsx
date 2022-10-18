import { Col, Container, Row } from 'react-bootstrap';

import SimilarBounty from './similarBounty';

const Bounty = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4 }}>
          <SimilarBounty />
        </Col>
        <Col md={{ span: 4 }}>
          <SimilarBounty />
        </Col>
        <Col md={{ span: 4 }}>
          <SimilarBounty />
        </Col>
      </Row>
    </Container>
  );
};

export default Bounty;
