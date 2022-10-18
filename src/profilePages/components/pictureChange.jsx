import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import UploadIcon from '../../assets/icon/snapbrillia_upload_icon.svg';
import Camera from '../../assets/icon/snapbrillia_camera_icon.png';

import '../css/pictureChange.css';

export default function PictureChange({ show, setShowDisclaimer }) {
  return (
    <Modal
      size="lg"
      contentClassName="my_picture_change_modal_border"
      dialogClassName="my_picture_change_modal_size"
      show={true}
      onHide={() => setShowDisclaimer(true)}
      centered
    >
      <Modal.Header className="my_picture_change_title_bg" closeButton>
        <Modal.Title>
          <p className="my_picture_change_title pt-3">
            Replace Profile Picture
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-0 pt-0">
        <Row>
          <p className="my_picture_change_subtitle">
            Your Snapbrillia profile picture will display at 32 x 32 pixels with
            an aspect ratio of 1:1. However, in order to maintain a high quality
            profile picture, we recommend uploading at a higher resolution.
          </p>
        </Row>
        <Row className="pt-4">
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
              height={200}
              width={200}
              className="my_picture_change_profile_image"
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="pt-3 my_picture_change_title_bg justify-content-between">
        <div className="my_picture_change_upload_btn">
          <div className="my_picture_change_upload_btn_content justify-content-center">
            <img
              src={UploadIcon}
              alt="upload-icon"
              style={{ marginRight: '2px' }}
            />
            Upload
          </div>
        </div>
        <div className="my_picture_change_photo_btn">
          <div className="my_picture_change_photo_btn_content justify-content-center">
            <img src={Camera} style={{ marginRight: '2px' }} />
            Take Photo
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
