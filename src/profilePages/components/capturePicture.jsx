/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useCallback } from 'react';
import { Col, Container, Row, Modal, ModalHeader, Form } from 'react-bootstrap';
import Webcam from 'react-webcam';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../shared/utils.js';
import '../../shared/css/buttonStyles.css';
import '../css/capturePicture.css';

import { useAuth } from '../../context/authContext';
import { uploadFile } from '../../api/files';
import { UserImage } from '../../shared/images';

const CapturePicture = ({ modalOpen, setModalOpen }) => {
  const { auth, updateProfile } = useAuth();
  const webcamRef = useRef();
  const inputPhoto = useRef();
  const [imgSrc, setImgSrc] = useState(null);
  const [webcamMode, setWebcamMode] = useState(false);
  const capture = useCallback(() => {
    const img = webcamRef.current.getScreenshot();
    setImgSrc(img);
  }, [webcamRef, setImgSrc]);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const save = async () => {
    const canvas = await getCroppedImg(imgSrc, croppedArea);
    canvas.toBlob(
      async (blob) => {
        const formData = new FormData();
        formData.append('type', 'avatar');
        formData.append('file', blob, 'avatar.jpeg');
        try {
          const fileInfo = await uploadFile(formData);
          if (fileInfo.url) {
            await updateProfile({
              avatar: fileInfo.url,
            });
          }
          setImgSrc(null);
          setWebcamMode(false);
        } catch (err) {}
      },
      'image/jpeg',
      0.9
    );
  };

  return (
    <Modal show={modalOpen} size="lg">
      <Container fluid>
        <Row>
          <ModalHeader className="capture_picture_title">
            Replace Profile Picture
            <button onClick={() => setModalOpen(false)} className="close">
              &times;
            </button>
          </ModalHeader>
          <p className="capture_picture_context">
            Your Snapbrillia profile display will display at 32 x 32 pixels with
            an aspect ratio of 1:1. However, in order to maintain a high quality
            profile picture, we recommend uploading at a higher resolution. To
            retake the picture hit the cancel button.
          </p>
          <input
            type="file"
            ref={inputPhoto}
            style={{ display: 'none' }}
            accept={'image/jpeg, image/png, image/gif'}
            onChange={(e) => {
              if (e.target.files[0]) {
                setImgSrc(URL.createObjectURL(e.target.files[0]));
              }
            }}
            onLoad={(e) => {
              if (e.target.files[0]) {
                URL.revokeObjectURL(e.target.files[0]);
              }
            }}
          />
          <Col xs={12} md={12} className="capture_picture_image">
            {imgSrc && (
              <>
                <div className="cropper-container">
                  <Cropper
                    image={imgSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    showGrid={false}
                    objectFit={'auto-cover'}
                    onCropComplete={onCropComplete}
                    classes={{
                      containerClassName: 'cropper-container-mask'
                    }}
                  />
                  <div className="cropper-mask"></div>
                  <div className="cropper-controls">
                    <span
                      onClick={() => {
                        if (Number(zoom) > 1.1)
                          setZoom(`${Number(zoom) - 0.1}`);
                      }}
                    >
                      -
                    </span>
                    <Form.Range
                      className="cropper-slider"
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      onChange={(e) => setZoom(e.target.value)}
                    />
                    <span
                      onClick={() => {
                        if (Number(zoom) < 3) setZoom(`${Number(zoom) + 0.1}`);
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
                {webcamMode && (
                  <span
                    className="retake-button-alignment"
                    onClick={() => {
                      setImgSrc(null);
                    }}
                  >
                    {' '}
                    Retake{' '}
                  </span>
                )}
                {!webcamMode && (
                  <span
                    className="retake-button-alignment"
                    onClick={() => {
                      setImgSrc(null);
                      inputPhoto.current.click();
                    }}
                  >
                    Use a different image
                  </span>
                )}
              </>
            )}
            {!webcamMode && !imgSrc && (
              <div className="shadow p-0 bg-white rounded-circle personal_edit_picture_profile">
                <img
                  src={UserImage(auth.user)}
                  alt="profile"
                  height={200}
                  width={200}
                  style={{ borderRadius: '50%' }}
                />
              </div>
            )}
            {webcamMode && !imgSrc && (
              <Webcam
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                audio={false}
                height={200}
                width={200}
                style={{
                  borderRadius: '10px',
                  boxShadow: '0px 0px 20px -5px rgba(0, 0, 0, 0.25)',
                }}
              />
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Row>
              <Col className="cancel-button-alignment">
                {!webcamMode && !imgSrc && (
                  <button
                    onClick={() => {
                      inputPhoto.current.click();
                    }}
                    className="upload-button"
                  >
                    Upload
                  </button>
                )}
                {((webcamMode && !imgSrc) || imgSrc) && (
                  <button
                    onClick={() => {
                      setWebcamMode(false);
                      setImgSrc(null);
                    }}
                    className="off-chain-resume-cancel-text"
                  >
                    Cancel
                  </button>
                )}
              </Col>
              <Col className="button-alignment-capture">
                {!webcamMode && !imgSrc && (
                  <button
                    onClick={() => setWebcamMode(true)}
                    className="capture-picture-take-photo-button"
                  >
                    Take Photo
                  </button>
                )}
                {webcamMode && !imgSrc && (
                  <button
                    onClick={capture}
                    className="btn-primary capture-picture-capture-button"
                  >
                    Capture
                  </button>
                )}
                {imgSrc && (
                  <button
                    onClick={save}
                    className="btn-primary save-picture-save-button"
                  >
                    Save
                  </button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default CapturePicture;
