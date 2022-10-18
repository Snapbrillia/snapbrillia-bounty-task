import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/openOfficeHours.css';

export default function OpenOfficeHours() {
  const [daysChecked, setDaysChecked] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setDaysChecked([...daysChecked, e.target.value]);
    }
    if (e.target.checked === false) {
      setDaysChecked(daysChecked.filter((day) => day !== e.target.value));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="bold">Open Office Hours</h3>
          <p className="small-text mt-3">
            Press the check marks for the information you want to include for
            your mentees to see.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={3} className="text-nowrap">
          <h6>Days of the week</h6>
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Monday"
            name="Monday"
            value="Monday"
          />
          <label className="ps-2" htmlFor="Monday">
            Monday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Tuesday"
            name="Tuesday"
            value="Tuesday"
          />
          <label className="ps-2" htmlFor="Tuesday">
            Tuesday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Wednesday"
            name="Wednesday"
            value="Wednesday"
          />
          <label className="ps-2" htmlFor="Wednesday">
            Wednesday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Thursday"
            name="Thursday"
            value="Thursday"
          />
          <label className="ps-2" htmlFor="Thursday">
            Thursday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Friday"
            name="Friday"
            value="Friday"
          />
          <label className="ps-2" htmlFor="Friday">
            Friday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Saturday"
            name="Saturday"
            value="Saturday"
          />
          <label className="ps-2" htmlFor="Saturday">
            Saturday
          </label>
          <br />
          <input
            onChange={handleChange}
            className="open-off-hrs-check-input form-check-input"
            type="checkbox"
            id="Sunday"
            name="Sunday"
            value="Sunday"
          />
          <label className="ps-2" htmlFor="Sunday">
            Sunday
          </label>
        </Col>
        <Col>
          {daysChecked.map((day, index) => {
            return (
              <div key={index} className="d-inline-flex ps-1 pe-1 me-4">
                <div className="d-flex flex-column mb-3">
                  <h6>{day}</h6>
                  <div className="d-inline-flex">
                    <select className="form-select bg-light primary bold">
                      <option>12:00am</option>
                      <option>1:00am</option>
                      <option>2:00am</option>
                      <option>3:00am</option>
                      <option>4:00am</option>
                      <option>5:00am</option>
                      <option>6:00am</option>
                      <option>7:00am</option>
                      <option>8:00am</option>
                      <option>9:00am</option>
                      <option>10:00am</option>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                      <option>1:00pm</option>
                      <option>2:00pm</option>
                      <option>3:00pm</option>
                      <option>4:00pm</option>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                      <option>8:00pm</option>
                      <option>9:00pm</option>
                      <option>10:00pm</option>
                      <option>11:00pm</option>
                    </select>
                    <span className="ps-1 pe-1">-</span>
                    <select className="form-select bg-light primary bold">
                      <option>12:00am</option>
                      <option>1:00am</option>
                      <option>2:00am</option>
                      <option>3:00am</option>
                      <option>4:00am</option>
                      <option>5:00am</option>
                      <option>6:00am</option>
                      <option>7:00am</option>
                      <option>8:00am</option>
                      <option>9:00am</option>
                      <option>10:00am</option>
                      <option>11:00am</option>
                      <option>12:00pm</option>
                      <option>1:00pm</option>
                      <option>2:00pm</option>
                      <option>3:00pm</option>
                      <option>4:00pm</option>
                      <option>5:00pm</option>
                      <option>6:00pm</option>
                      <option>7:00pm</option>
                      <option>8:00pm</option>
                      <option>9:00pm</option>
                      <option>10:00pm</option>
                      <option>11:00pm</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
