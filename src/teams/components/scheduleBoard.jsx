import { Row, Col, Container } from 'react-bootstrap';
import { Link } from '@reach/router';
import React, { useState } from 'react';
import '../css/scheduleBoard.css';
import MentorConfirmationModal from './mentorConfirmationModal';
import { useParams } from '@reach/router';
import { format } from 'date-fns';
import { buildCalendarUrl } from '../../shared/calendar';
import { useAuth } from '../../context/authContext';

export default function ScheduleBoard({ events }) {
  const { updateProfile } = useAuth();
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState(false);
  const weekday = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const weekdayFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const saveAndContinue = async () => {
    if (!events.length) {
      return setShowSummary(true);
    }
    try {
      await updateProfile({ schedules: events });
      setShowSummary(true);
    } catch (err) {}
  };
  return (
    <Container className="p-4" fluid>
      <Row className="schedule_board_bg">
        <p className="schedule_board_content">Your Schedule</p>
        {events?.map((schedule, index) => {
          const days = schedule.recurring.days
            .map((x) => {
              return x?.getDay() ? weekdayFull[x?.getDay()] : null;
            })
            .filter(Boolean)
            .join(' and ');
          const currentSchedule = {
            ...schedule,
          };
          currentSchedule.recurring.byDay = schedule.recurring.days
            .map((x) => {
              return x?.getDay() ? weekday[x?.getDay()] : null;
            })
            .filter(Boolean)
            .join(',');
          return (
            <div key={index} className="lh-1 p-2">
              <span className="small-text mentor-conf-modal-schedule-text-fs">
                {`${days} at ${format(schedule.startTime, "hh:mm aaaaa'm'")}`}{' '}
                <br />
                <a
                  className="mentor-conf-modal-calendar-link border-0 bg-light underline p-0"
                  target="_blank"
                  rel="noreferrer"
                  href={buildCalendarUrl(currentSchedule, 'google')}
                >
                  Click here to add to calendar
                </a>
              </span>
            </div>
          );
        })}
      </Row>
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 3, offset: 0 }}
          md={{ span: 2, offset: 2 }}
          lg={{ span: 2, offset: 3 }}
          xl={{ span: 2, offset: 5 }}
          xxl={{ span: 1, offset: 6 }}
          className="schedule_board_button_padding"
        >
          <button className="schedule_board_back_button">
            <Link to={`/bounties/${id}/team-mentor`}>back</Link>
          </button>
        </Col>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 4, offset: 5 }}
          md={{ span: 3, offset: 5 }}
          lg={{ span: 3, offset: 4 }}
          xl={{ span: 2, offset: 3 }}
          xxl={{ span: 2, offset: 3 }}
          style={{ paddingTop: '26px' }}
        >
          <MentorConfirmationModal
            show={showSummary}
            bountyId={id}
            setShowSummary={setShowSummary}
            events={events}
          />

          <button
            onClick={() => saveAndContinue()}
            className="schedule_board_save_continue_button"
          >
            <p className="schedule_board_save_continue_button_text">
              Save And Continue
            </p>
          </button>
        </Col>
      </Row>
    </Container>
  );
}
