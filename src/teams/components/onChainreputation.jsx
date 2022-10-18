import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/onChainreputation.css';

const onChainreputation = () => {
  return (
    <Container fluid className="onchain-rep-text-color">
      <Row>
        <Col md={12}>
          <Row className="">
            <p className="on-chain-reputation_header">On-Chain Reputation</p>
          </Row>

          <Row className="on-chain-reputation_context">
            <p className="on-chain-reputation_context">
              {`Your On-Chain Reputation shows off how many bounties you've completed successfully and other activities you have done on Snapbrillia. It will be displayed automatically to potential team members and bounty creators.`}
            </p>
          </Row>

          <Row className="on-chain-reputation_URL pt-4">
            <div>
              {' '}
              <span>{'On-Chain Resume URL: '}</span>
              <span style={{ color: 'black' }}>
                {<u>profile/dennismakuyev/on-chain-resume</u>}
              </span>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default onChainreputation;
