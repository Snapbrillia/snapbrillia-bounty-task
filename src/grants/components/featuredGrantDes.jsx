import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Illustration from '../../assets/illustrations/snapbrillia_startup_Illustration_1.svg';
import CreateGrantProposal from '../../shared/button/createGrantProposal';
import '../../shared/css/textColors.css';
import { navigate } from '@reach/router';

const FeaturedGrantDes = () => {
  const grantSetup = () => {
    return navigate('/grant-setup');
  };
  return (
    <Row>
      <Col xs={12} lg={7}>
        <Row>
          <div className="h1 primary px-5 py-2">Grants</div>
        </Row>
        <Row className="px-5" style={{ color: '#808080' }}>
          Grants are Snapbrillia&apos;s Solution to Quadratic Funding (QF). It
          allows you to fund public goods projects in a safe and democratic way.
          If something below catches your eye, you may learn more about it and
          contribute towards its creation.
          <br />
          <br />
          Support the community in a way that brings about real progress in
          tech, one person at a time.
          <br />
          <br />
          <br />
          <div align="right">
            <CreateGrantProposal onClick={grantSetup} />
          </div>
        </Row>
      </Col>
      <Col lg={5} className="d-none d-lg-block">
        <img className="w-100" src={Illustration} alt="Illustration" width={454} height={304} />
      </Col>
    </Row>
  );
};

export default FeaturedGrantDes;
