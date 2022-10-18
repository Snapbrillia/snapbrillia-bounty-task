import React from 'react';
import { Row } from 'react-bootstrap';
import '../css/missingPersonalInfo.css';

const missingPersonalInfo = () => {
  return (
    <>
      <Row className="h1 missing-personal-info-title">Personal Information</Row>
      <Row className="missing-personal-info-description">
        Looks like youre missing some personal information. The forms you fill
        out below will be seen by mentors, other team members and bounty
        posters.
      </Row>
    </>
  );
};

export default missingPersonalInfo;
