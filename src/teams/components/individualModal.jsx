import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import '../../shared/css/sharedStyles.css';
import '../../shared/css/typography.css';
import '../../shared/menus/css/dropDownMenu.css';
import Button from 'react-bootstrap/Button';

export default function TempModal() {
  const [show, setShow] = useState(false);
  return (
    <Row>
      <Col xs={2}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            {/*<strong className="me-auto">Bootstrap</strong>*/}
            {/*<small>11 mins ago</small>*/}
          </Toast.Header>
          <Toast.Body>You Have Expressed Interest<br /> To Start As An Individual!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={2}>
        <Button onClick={() => setShow(true)}>You Have Expressed Interest<br /> To Start As An Individual!</Button>
      </Col>
    </Row>
  );
}