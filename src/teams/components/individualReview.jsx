import React from 'react';
import { Row, Col } from 'react-bootstrap';

//CSS
import '../../shared/css/typography.css';
import '../css/teamSummaryProfile.css';

const IndividualReview = ({ bounty }) => {
  return (
    <Row className="align-items-center pt-5">
      <Col className="col-md-9 col-8">
        <h1 className="h1 fs-3">Congratulations, {bounty.userId.fullName}!</h1>
        <span className="grey-title mb-2" style={{ fontSize: 16 }}>
          You just finished{' '}
          <span className="primary medium">{bounty.name} </span>
          {''}
          {/* <a
            className="fs-6"
            style={{ color: '#2D2B6F', textDecoration: 'none' }}
            href="https://trustwallet.com/"
          >
            Integration of Vite with Trust Wallet!
          </a>{' '} */}
          Check out your reward!
        </span>
      </Col>
      <Col className=" text-center">
        <span className="grey-title d-block ms-4">
          The reward for the bounty is...
        </span>
        <span className="h2 my-1 d-block fs-3" style={{ color: '#450044' }}>
          ${bounty.rewardAmount}
        </span>
        <span
          style={{ color: '#957B94', fontWeight: 'bold', fontSize: '18px' }}
        >
          20004.80 ₳DA
        </span>
      </Col>
    </Row>
  );
};

export default IndividualReview;
