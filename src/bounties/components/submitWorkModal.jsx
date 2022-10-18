import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import * as bountyApi from '../../api/bounty';

export default function SubmitWorkModal({ show, setSubmitWorkModal, assessment }) {
  const [content, setContent] = useState('');

  const submitWork = async () => {
    if (!content) {
      return toast('Invalid data');
    }
    try {
      await bountyApi.submitWork(assessment._id, content);
      setSubmitWorkModal(false);
    } catch (error) {
      return toast(error.message);
    }
  };

  return (
    <Modal show={show} onHide={() => setSubmitWorkModal(false)}>
      <Modal.Header closeButton>Please describe what you did and where below</Modal.Header>
      <Modal.Body>
        <textarea
          className="text-box-entry"
          placeholder="Example: I submitted my pull request within the github account for review"
          value={content}
          rows="4"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn-primary-medium"
          onClick={submitWork}
          type="button"
        >
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}
