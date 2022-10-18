import React, { useState, useRef } from 'react';
import {
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  Button,
  Overlay,
} from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/openOfficeHoursFields.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast } from 'react-toastify';
import defaultTimezones from '../data/timezone.json';

const MentorApplication = ({ events, setEvents }) => {
  const initTimeState = {
    hour: '01',
    minute: '00',
    period: 'AM',
  };
  const selectDateButton = useRef();
  const [date, setDate] = useState(null);
  const [meetingName, setMeetingName] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [fromTime, setFromTime] = useState(initTimeState);
  const [toTime, setToTime] = useState(initTimeState);
  // const [repeat, setRepeat] = useState(1);
  const [timezone, setTimezone] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (value) => {
    setDate(value);
    setShowCalendar(false);
  };
  const showDate = date == null ? 'Select Date' : date.toLocaleDateString();

  const resetData = () => {
    setToTime(initTimeState);
    setFromTime(initTimeState);
    // setRepeat(1);
    setTimezone('');
    setMeetingName('');
    setMeetingDescription('');
    setDate(null);
  };

  const formatHour = (setFunc) => {
    return (e) => {
      if (e.target.value === '00') {
        setFunc((p) => ({
          ...p,
          hour: '01',
        }));
      }
    };
  };
  const formatInput = (min, max, setFunc, field) => {
    return (e) => {
      if (!isNaN(e.target.value) && `${Number(e.target.value)}`.length === 1) {
        if (Number(e.target.value) < min) {
          setFunc((p) => ({
            ...p,
            [field]: '0' + min,
          }));
        } else {
          setFunc((p) => ({
            ...p,
            [field]: '0' + Number(e.target.value),
          }));
        }
      } else {
        if (Number(e.target.value) > max) {
          setFunc((p) => ({
            ...p,
            [field]: max,
          }));
        } else if (Number(e.target.value) < min) {
          setFunc((p) => ({
            ...p,
            [field]: '0' + min,
          }));
        } else if (e.target.value === '00') {
          setFunc((p) => ({
            ...p,
            [field]: '00',
          }));
        } else {
          setFunc((p) => ({
            ...p,
            [field]: `${Number(e.target.value)}`,
          }));
        }
      }
    };
  };

  function convertTime(time) {
    return `${time.hour}:${time.minute}${time.period}`;
  }

  function setTime(dateTime, str) {
    var newDate = new Date(dateTime);
    console.log(timezone);
    var s = /(\d+):(\d+)(.+)/.exec(str);
    newDate.setHours(
      s[3] === 'PM' ? 12 + parseInt(s[1], 10) : parseInt(s[1], 10)
    );
    newDate.setMinutes(parseInt(s[2], 10));
    console.log(newDate);

    let changeTzDate = new Date(
      newDate.toLocaleString('en-US', { timeZone: timezone })
    );

    let diff = newDate.getTime() - changeTzDate.getTime();
    return new Date(newDate.getTime() - diff);
  }

  const generate = () => {
    if (!date) {
      return toast('Please select date');
    }
    if (!meetingName) {
      return toast('Please add meeting name');
    }

    const fromDate = setTime(date, convertTime(fromTime));
    const toDate = setTime(date, convertTime(toTime));
    const event = {
      from: fromTime,
      to: toTime,
      title: meetingName,
      description: meetingDescription,
      startTime: fromDate,
      endTime: toDate,
      timezone: timezone,
      recurring: {
        repeat: 'weekly',
        weekStart: 'SU',
        // count: Number(repeat) <= 0 ? 1 : repeat,
        days: [fromDate],
      },
    };
    groupEvents(event);
  };
  const compareTime = (x, y) => {
    return x.hour === y.hour && x.minute === y.minute && x.period === y.period;
  };

  const groupEvents = (event) => {
    const sameEventIndex = events.findIndex((x) => {
      return (
        event.startTime === x.startTime ||
        (event.startTime.getDay() === x.startTime.getDay() &&
          compareTime(x.from, event.from))
      );
    });
    const similarEventIndex = events.findIndex((x) => {
      return (
        compareTime(x.from, event.from) &&
        compareTime(x.to, event.to) &&
        event.recurring.count === x.recurring.count
      );
    });
    if (similarEventIndex > -1 && sameEventIndex === -1) {
      setEvents((prev) =>
        prev.map((x, i) => {
          if (i === similarEventIndex) {
            x.recurring.days.push(event.startTime);
          }
          return x;
        })
      );
    } else if (sameEventIndex === -1) {
      setEvents((prev) => [...prev, event]);
    }
    resetData();
  };

  const web = (
    <>
      <Container fluid className="open-office-hours-fields-bg">
        {/* add title and description */}
        <h1 className="open-office-hours-fields-title">Open Office Hours</h1>
        {/* <p className="small-text open-office-hours-fields-paragraph">
          Press the check marks for the information you want to include for your
          mentees to see. Mentors with office hours are 3x more likely to
          succeed.
        </p> */}
        <br></br>
        {/* add the first two input lines */}
        <Form.Group>
          <Form.Label className="small-text open-office-hours-fields-subtitle">
            Meeting Name*
          </Form.Label>
          <Form.Control
            md={12}
            className="open-office-hours-fields-input"
            value={meetingName}
            onChange={(e) => setMeetingName(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <br></br>
        <Form.Group>
          <Form.Label className="small-text open-office-hours-fields-subtitle">
            Description
          </Form.Label>
          <Form.Control
            md={12}
            className="open-office-hours-fields-input"
            value={meetingDescription}
            onChange={(e) => setMeetingDescription(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <br></br>
        {/* add the last input line */}
        <Row>
          <Overlay
            target={selectDateButton.current}
            show={showCalendar}
            placement="top-start"
          >
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  position: 'absolute',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                <Calendar value={date} onChange={handleChange} />
              </div>
            )}
          </Overlay>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <p className="small-text open-office-hours-fields-subtitle">
              Pick Dates*
            </p>
            {/* create onclick Date Select Button */}
            <Button
              variant="outline-light"
              className="btn primary"
              ref={selectDateButton}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {showDate}
            </Button>
          </Col>

          {/* create time selection input */}
          <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
            <Row>
              <Form.Label className="small-text open-office-hours-fields-subtitle">
                Time*
              </Form.Label>
            </Row>
            <Row style={{ paddingLeft: '5px' }}>
              <Col
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                xs={12}
                sm={6}
                md={3}
              >
                <InputGroup size="sm">
                  <Form.Control
                    className="input-text-small open-office-hours-fields-input"
                    type="number"
                    max={12}
                    min={0}
                    value={fromTime.hour}
                    onChange={formatInput(0, 12, setFromTime, 'hour')}
                    onBlur={formatHour(setFromTime)}
                  />
                  <InputGroup.Text className="input-text-small open-office-hours-fields-input">
                    :
                  </InputGroup.Text>
                  <Form.Control
                    className="input-text-small open-office-hours-fields-input"
                    type="number"
                    max={59}
                    min={0}
                    value={fromTime.minute}
                    onChange={formatInput(0, 59, setFromTime, 'minute')}
                  />
                </InputGroup>
              </Col>
              <Col
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                xs={12}
                sm={6}
                md={'auto'}
              >
                <Form.Select
                  aria-label="AM"
                  className="small-text open-office-hours-fields-input"
                  size="sm"
                  value={fromTime.period}
                  onChange={(e) =>
                    setFromTime((prev) => ({ ...prev, period: e.target.value }))
                  }
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Col>
              <Col
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                md={'auto'}
                className="primary"
              >
                &#8722;
              </Col>
              <Col
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                xs={12}
                sm={6}
                md={3}
              >
                <InputGroup size="sm">
                  <Form.Control
                    className="input-text-small open-office-hours-fields-input"
                    type="number"
                    max={12}
                    min={0}
                    value={toTime.hour}
                    onChange={formatInput(0, 12, setToTime, 'hour')}
                    onBlur={formatHour(setToTime)}
                  />
                  <InputGroup.Text className="input-text-small open-office-hours-fields-input">
                    :
                  </InputGroup.Text>
                  <Form.Control
                    className="input-text-small open-office-hours-fields-input"
                    type="number"
                    max={59}
                    min={0}
                    value={toTime.minute}
                    onChange={formatInput(0, 59, setToTime, 'minute')}
                  />
                </InputGroup>
              </Col>

              <Col
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
                xs={12}
                sm={6}
                md={'auto'}
              >
                <Form.Select
                  aria-label="AM"
                  className="small-text open-office-hours-fields-input"
                  size="sm"
                  value={toTime.period}
                  onChange={(e) =>
                    setToTime((prev) => ({ ...prev, period: e.target.value }))
                  }
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
            <Row>
              <Form.Label className="small-text open-office-hours-fields-subtitle">
                Timezone
              </Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Select
                  aria-label="timezone"
                  className="open-office-hours-fields-input"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  {defaultTimezones.map((x) => (
                    <option key={x.label} value={x.value}>
                      {x.label}
                    </option>
                  ))}
                  ;
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <p
              className="primary open-office-hours-fields-link"
              onClick={generate}
            >
              Create Link
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
  return web;
};

export default MentorApplication;
