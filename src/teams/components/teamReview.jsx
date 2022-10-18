import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

//CSS
import '../../shared/css/typography.css';
import '../css/teamSummaryProfile.css';

const TeamReview = () => {
  return (
    <Container className="pt-4">
      <Row className="align-items-center mb-5">
        <Col className="col-md-10 col-8">
          <h1 className="h1 fs-3">Congratulations, Dennis!</h1>
          <span className="grey-title mb-2" style={{ fontSize: 16 }}>You and your team just finished <a className="fs-6" style={{ color: "#2D2B6F", textDecoration: 'none' }} href="https://trustwallet.com/">Integration of Vite with Trust Wallet!</a> <br /> Check out your reward and consider giving back to your team for their hard work!</span>

          {/* VITE INTEGRATION TEMPLATE */}
          {/* <img src="https://Integration.of.Vite.with.Trust.Wallet" className="Vite-logo" alt="Vite logo"> */}
          {/*<span className="link pointer ms-2"></span> */}

        </Col>
        <Col className="text-end text-left">
          <span className="grey-title d-block ms-4">The reward for the bounty is...</span>
          <span className="h2 my-1 d-block fs-3" style={{ color: "#450044" }}>
            $9604.80
          </span>
          <span style={{ color: "#957B94", fontWeight: "bold", fontSize: "18px" }}>
            20004.80 ₳DA
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamReview;
