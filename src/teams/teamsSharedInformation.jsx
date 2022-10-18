import { Row, Col, Container } from 'react-bootstrap';
import NavBar from '../shared/menus/navBar';
import OfficeHoursHeader from './components/officeHoursHeader';
import MentorApplication from './components/mentorApplication';
import ScheduleBoard from './components/scheduleBoard';
import { useState } from 'react';
import { useAuth } from '../context/authContext';

export default function TeamsSharedInformation() {
  const { auth } = useAuth();
  const [events, setEvents] = useState([]);

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row style={{ paddingLeft: '24px', paddingRight: '60px' }}>
          <OfficeHoursHeader user={auth.user} />
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <MentorApplication events={events} setEvents={setEvents} />
          </Col>
          <Col xs={12} sm={12} md={6} style={{ paddingTop: '20px' }}>
            <ScheduleBoard events={events} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
