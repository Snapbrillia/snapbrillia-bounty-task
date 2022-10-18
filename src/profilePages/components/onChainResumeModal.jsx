import Modal from 'react-bootstrap/Modal';
import OnChainResume from '../components/onChainResume';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function OnChainResumeModal({ id, handleClose, showModal }) {
  return (
    <Modal
      backdrop="static"
      onHide={handleClose}
      show={showModal}
      size="lg"
      fullscreen="lg-down"
    >
      <Container>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title>
            <span className="h2">On Chain Resume</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OnChainResume candidateId={id} />
        </Modal.Body>
      </Container>
    </Modal>
  );
}
