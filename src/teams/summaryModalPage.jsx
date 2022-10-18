import { Container, Row, Col } from 'react-bootstrap';

//COMPONENTS
import BackButton from '../shared/button/back';
import NextButton from '../shared/button/next';
import TeamSummaryProfile from './components/teamSummaryProfile';
import TeamsSummary from './components/teamsSummary';

const SummaryModalPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-5 bold">Summary</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <TeamSummaryProfile />
        </Col>
      </Row>
      <Row>
        <Col>
          <TeamsSummary />
        </Col>
      </Row>
      <Row className="justify-content-end mt-5 align-items-center pb-4">
        <Col xs={5} lg={2}>
          <BackButton btnText="Canel" />
        </Col>
        <Col xs={5} lg={2}>
          <NextButton btnText="Confirm" />
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryModalPage;
