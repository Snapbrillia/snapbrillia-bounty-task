import { React, useState } from 'react';
import { Col, Row, Container, Form, InputGroup, Button } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/openOfficeHoursFields.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const openOfficeHoursFields = () => {
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (value) => {
    setDate(value);
    setShowCalendar(false);
  };
  const showDate = date == null ? 'Select Date' : date.toLocaleDateString();

  const web = (
    <>
      <Container fluid className="open-office-hours-fields-bg">
        {/* add title and description */}
        <h1 className="open-office-hours-fields-title">Open Office Hours</h1>
        <p className="small-text open-office-hours-fields-paragraph">
          Press the check marks for the information you want to include for your
          mentees to see. Mentors with office hours are 3&#215; more likely to
          succeed.
        </p>
        <br></br>
        {/* add the first two input lines */}
        <Form.Group>
          <Form.Label className="small-text open-office-hours-fields-subtitle">
            Meeting Name*
          </Form.Label>
          <Form.Control md={12} className="open-office-hours-fields-input" />
        </Form.Group>
        <br></br>
        <br></br>
        <Form.Group>
          <Form.Label className="small-text open-office-hours-fields-subtitle">
            Description
          </Form.Label>
          <Form.Control md={12} className="open-office-hours-fields-input" />
        </Form.Group>
        <br></br>
        <br></br>
        {/* add the last input line */}
        <Row>
          <Col xs={12} sm={12} md={2}>
            <p className="small-text open-office-hours-fields-subtitle">
              Pick Dates*
            </p>

            {/* create onclick Date Select Button */}
            <Button
              variant="outline-light"
              className="btn primary"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {showDate}
            </Button>
          </Col>

          {/* create time selection input */}
          <Col md={7}>
            <Row>
              <Form.Label className="small-text open-office-hours-fields-subtitle">
                Time*
              </Form.Label>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <InputGroup size="sm">
                  <Form.Control className="input-text-small open-office-hours-fields-input" />
                  <InputGroup.Text className="input-text-small open-office-hours-fields-input">
                    :
                  </InputGroup.Text>
                  <Form.Control className="input-text-small open-office-hours-fields-input" />
                </InputGroup>
              </Col>
              <Col xs={12} sm={6} md={'auto'}>
                <Form.Select
                  aria-label="AM"
                  className="small-text open-office-hours-fields-input"
                  size="sm"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Col>
              <Col md={'auto'} className="primary">
                &#8722;
              </Col>
              <Col xs={12} sm={6} md={3}>
                <InputGroup size="sm">
                  <Form.Control className="input-text-small open-office-hours-fields-input" />
                  <InputGroup.Text className="input-text-small open-office-hours-fields-input">
                    :
                  </InputGroup.Text>
                  <Form.Control className="input-text-small open-office-hours-fields-input" />
                </InputGroup>
              </Col>

              <Col xs={12} sm={6} md={'auto'}>
                <Form.Select
                  aria-label="AM"
                  className="small-text open-office-hours-fields-input"
                  size="sm"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={3}>
            <Row>
              <Form.Label className="small-text open-office-hours-fields-subtitle">
                Repeat
              </Form.Label>
            </Row>
            <Row>
              <Col>
                <Form.Control className="open-office-hours-fields-input" />
              </Col>
            </Row>
          </Col>
        </Row>
        <p className="primary open-office-hours-fields-link">Create Link</p>
        <Calendar
          className={showCalendar ? '' : 'hide'}
          value={date}
          onChange={handleChange}
        />
      </Container>
    </>
  );
  return web;
};

export default openOfficeHoursFields;
