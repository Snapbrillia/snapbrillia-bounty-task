import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/teamsShareResume.css';

export default function Resume() {
  const handleClickChooseNewFile = (e) => {
    console.log('clicked!');
  };

  return (
    <Container>
      <Row>
        <Col className="resume-checkbox-column" md={1}>
          <input
            className="resume-checkbox"
            type="checkbox"
            id="share-resume"
            name="share-resume"
            value="share-resume"
          />
          {/* checkboxholder */}
        </Col>
        <Col md={11}>
          <Row>
            <h1 className="bold fs-2" htmlFor="share-resume">
              Resume
            </h1>
          </Row>
          <Row>
            <p className="small-text">
              Would you like to share your resume with the Mentor? If so, check
              this box but if not it will automatically be shared with the
              Bounty owner. A resume is required for the Bounty owner.
            </p>
          </Row>
          <Row>
            <p>
              <span
                onClick={handleClickChooseNewFile}
                className="resume-cursor-pointer underline"
              >
                Choose new file
              </span>
              <br />
              <span className="text-muted text-nowrap">
                Off-Chain Resume on file:{' '}
              </span>
              <span className="underline">current_file_name.pdf</span>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
