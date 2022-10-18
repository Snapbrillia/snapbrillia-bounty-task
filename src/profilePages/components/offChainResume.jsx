import { Container, Row, Col } from 'react-bootstrap';
import React, { useRef } from 'react';
import '../css/offChainResume.css';
import { useAuth } from '../../context/authContext';
import { snapbrilliaFile, uploadFile } from '../../api/files';

export default function OffChainResume() {
  const { auth, updateProfile } = useAuth();
  const pdfInput = useRef();
  const uploadResume = async (file) => {
    const formData = new FormData();
    formData.append('type', 'resume');
    formData.append('file', file);
    try {
      const fileInfo = await uploadFile(formData);
      if (fileInfo.url) {
        await updateProfile({
          resume: fileInfo.url
        })
      }
    } catch (err){}
  }
  return (
    <Container className="off-chain-resume-box bg-light">
      <Row>
        <Col className="off-chain-resume-box-title-section">
          <span className="h1 off-chain-resume-box-title">
            Off-Chain Resume
          </span>
        </Col>
      </Row>
      <Row className="off-chain-resume-note">
        Your paper resume, helps you bolster your reputation when applying for
        bounties. Show companies your skills and your experience by uploading
        and updating your resume.
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            <Col className="off-chain-resume-current-file-text">
              Current Paper Resume:
            </Col>
          </Row>
          <Row>
            <Col className="off-chain-resume-current-file-link">  
              {auth.user?.resume && (
                <a href={snapbrilliaFile(auth.user?.resume)} download="resume" target="_blank" rel="noreferrer">resume.pdf</a>
              )}
            </Col>
            <Col>
              <input
                type="file"
                ref={pdfInput}
                style={{ display: 'none' }}
                accept={'application/pdf'}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    uploadResume(e.target.files[0]);
                  }
                }}
                onLoad={(e) => {
                  if (e.target.files[0]) {
                    URL.revokeObjectURL(e.target.files[0]);
                  }
                }}
              />
              <button className="btn-primary off-chain-resume-upload-button" onClick={() => pdfInput.current.click()}>
                {' '}
                Update Paper Resume{' '}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
