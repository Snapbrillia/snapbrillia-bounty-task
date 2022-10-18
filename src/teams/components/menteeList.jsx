import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/menteeList.css';

export default function MenteeList() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="h1">Mentee List</h1>
        </Col>
      </Row>
      {/* add the required linkns in all the href and image instead of placeholder img*/}
      {/* container of  mentee 1*/}
      <Row className="mentee-list-container">
        <Col md={4} className="mentee-list-col-spaceing">
          <img
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            className="mentee-list-logo align-self-center"
            alt="MenteeImg"
          ></img>
        </Col>
        <Col md={4}>
          <p className="name">James Bond</p>
          <p className="title">Team Member</p>
        </Col>

        <Col>
          <a href="add the link">discord</a>
          <p className="title">Discord</p>
        </Col>
        <Col>
          <a href="add the link">linkedin</a>
          <p className="title">Linkedin URL</p>
        </Col>
        <Col>
          <a href="add the link">github.com/james</a>
          <p className="title">Github URL</p>
        </Col>
      </Row>

      {/* container of  mentee 2*/}
      <Row className="mentee-list-container">
        <Col md={4} className="mentee-list-col-spaceing">
          <img
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            className="mentee-list-logo align-self-center"
            alt="MenteeImg"
          ></img>
        </Col>
        <Col md={4}>
          <p className="name">John Wick</p>
          <p className="title">Team Member</p>
        </Col>

        <Col>
          <a href="add the link">discord</a>
          <p className="title">Discord</p>
        </Col>
        <Col>
          <a href="add the link">linkedin</a>
          <p className="title">Linkedin URL</p>
        </Col>
        <Col>
          <a href="add the link">github.com/james</a>
          <p className="title">Github URL</p>
        </Col>
      </Row>

      {/* container of  mentee 3*/}
      <Row className="mentee-list-container">
        <Col md={4} className="mentee-list-col-spaceing">
          <img
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            className="mentee-list-logo align-self-center"
            alt="MenteeImg"
          ></img>
        </Col>
        <Col md={4}>
          <p className="name">Susan Boyle</p>
          <p className="title">Team Member</p>
        </Col>

        <Col>
          <a href="add the link">discord</a>
          <p className="title">Discord</p>
        </Col>
        <Col>
          <a href="add the link">linkedin</a>
          <p className="title">Linkedin URL</p>
        </Col>
        <Col>
          <a href="add the link">github.com/james</a>
          <p className="title">Github URL</p>
        </Col>
      </Row>

      {/* container of  mentee 4*/}
      <Row className="mentee-list-container">
        <Col md={4} className="mentee-list-col-spaceing">
          <img
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            className="mentee-list-logo align-self-center"
            alt="MenteeImg"
          ></img>
        </Col>
        <Col md={4}>
          <p className="name">Paul Scalin</p>
          <p className="title">Team Member</p>
        </Col>

        <Col>
          <a href="add the link">discord</a>
          <p className="title">Discord</p>
        </Col>
        <Col>
          <a href="add the link">linkedin</a>
          <p className="title">Linkedin URL</p>
        </Col>
        <Col>
          <a href="add the link">github.com/james</a>
          <p className="title">Github URL</p>
        </Col>
      </Row>

      {/* container of  mentee 5*/}
      <Row className="mentee-list-container">
        <Col md={4} className="mentee-list-col-spaceing">
          <img
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            className="mentee-list-logo align-self-center"
            alt="MenteeImg"
          ></img>
        </Col>
        <Col md={4}>
          <p className="name">Sara D. Roosavelt</p>
          <p className="title">Team Member</p>
        </Col>

        <Col>
          <a href="add the link">discord</a>
          <p className="title">Discord</p>
        </Col>
        <Col>
          <a href="add the link">linkedin</a>
          <p className="title">Linkedin URL</p>
        </Col>
        <Col>
          <a href="add the link">github.com/james</a>
          <p className="title">Github URL</p>
        </Col>
      </Row>
    </Container>
  );
}
