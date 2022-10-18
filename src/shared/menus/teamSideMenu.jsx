import { Col, Container, Row } from 'react-bootstrap';
import './css/teamSideMenu.css';
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

export default function teamSideMenu() {
  const [rating, setRating] = useState(null);
  const onChange = (value) => {
    setRating(value);
  };

  return (
    <Container className="team-sideMenu-search-container">
      <Row md={4} className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
        <input placeholder="Search" type="text" className="searchbox" />
      </Row>
      <Row>
        <Row className="team-side-menu-labels">Rating</Row>
        <div>
          <StarPicker
            className="starrating"
            onChange={onChange}
            value={rating}
          />
        </div>
      </Row>
      <Row className="team-side-menu-labels">Has Office Hours</Row>
      <div className="row">
        <div className="pdd">
          <input type="radio" name="officehours" id="officehrs" />
          <label htmlFor="officehrs" className="pdd-2">
            Yes
          </label>
        </div>
        <div className="pdd">
          <input type="radio" name="officehours" id="noofficehrs" />
          <label htmlFor="noofficehrs" className="pdd-2">
            No
          </label>
        </div>
      </div>
      <Row className="team-side-menu-labels">Has LinkedIn</Row>
      <div className="row">
        <div className="pdd">
          <input type="radio" name="linkedin" id="haslinkedin" />
          <label htmlFor="haslinkedin" className="pdd-2">
            Yes
          </label>
        </div>
        <div className="pdd">
          <input type="radio" name="linkedin" id="nolinkedin" />
          <label htmlFor="nolinkedin" className="pdd-2">
            No
          </label>
        </div>
      </div>
      <Row className="team-side-menu-labels">Has Discord</Row>
      <div className="row">
        <div className="pdd">
          <input type="radio" name="discord" id="hasdiscord" />
          <label htmlFor="hasdiscord" className="pdd-2">
            Yes
          </label>
        </div>
        <div className="pdd">
          <input type="radio" name="discord" id="nodiscord" />
          <label htmlFor="nodiscord" className="pdd-2">
            No
          </label>
        </div>
      </div>
    </Container>
  );
}
