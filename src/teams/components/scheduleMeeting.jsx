import { Container, Row, Col } from 'react-bootstrap';

export default function scheduleMeeting() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="bold">Your Schedule</h3>
        </Col>
        <p></p>
        <div className="small-text medium">
          mondays and wednesdays at 6:30 AM
        </div>
        <span className="underline">Click here to add to calender</span>
        <p></p>
        <div className="small-text medium">
          mondays and wednesdays at 6:30 AM
        </div>
        <span className="underline">Click here to add to calender</span>
        <p></p>
        <div className="small-text medium">
          mondays and wednesdays at 6:30 AM
        </div>
        <span className="underline">Click here to add to calender</span>
        <p></p>
        <div className="small-text medium">
          mondays and wednesdays at 6:30 AM
        </div>
        <span className="underline">Click here to add to calender</span>
      </Row>
    </Container>
  );
}
