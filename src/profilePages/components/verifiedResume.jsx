import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Security from '../../assets/icon/snapbrillia_profile_security_icon.svg';

import Copy from '../../assets/icon/snapbrillia_challenge_icon.svg';
import { navigate } from '@reach/router';
import '../css/onChainResume.css';
import OnChainResumeModal from '../components/onChainResumeModal';

export default function OnChainResume({ candidate }) {
  const [copied, setCopied] = useState(false);
  const [showOnChainResume, setShowOnChainResume] = useState(false);

  return (
    <Container className="on-chain-resume-box bg-light" show>
      <Row>
        <Col className="on-chain-resume-box-title-section">
          <span className="h1 on-chain-resume-box-title">On-Chain Resume</span>
        </Col>
      </Row>
      <Row className="on-chain-resume-note">
        Your verified resume exists on the block chain, it includes all of the
        bounties, grants, and assessments you've taken on our platform.
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            <Col className="off-chain-resume-current-file-text">
              Digital Identity Key:
            </Col>
          </Row>
          <Row>
            <Col style={{ marginLeft: '44px' }}>
              <img src={Security} alt="security-icon" />
              <span style={{ color: 'blue', paddingLeft: '10px' }}>
                {' '}
                {`did:key:${candidate.ssiWallet.did}`}{' '}
              </span>
              {/* !!!! This is Dynamic, fetch it from prism !!!!  */}
              <CopyToClipboard
                text={`did:key:${candidate.ssiWallet.did}`}
                onCopy={() => setCopied(true)}
              >
                <Button variant="light">
                  {' '}
                  <img src={Copy} alt="copy-icon" />{' '}
                </Button>
              </CopyToClipboard>
              {copied ? <span style={{ color: 'red' }}>Copied!</span> : null}
            </Col>
            <Col>
              <button
                className="btn-primary on-chain-resume-upload-button"
                onClick={() => setShowOnChainResume(true)}
              >
                View On-Chain Resume
              </button>
              {showOnChainResume && (
                <OnChainResumeModal
                  id={candidate._id}
                  handleClose={() => setShowOnChainResume(false)}
                  showModal={showOnChainResume}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
