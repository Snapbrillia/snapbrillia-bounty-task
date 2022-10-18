import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/mentorsPersonalInfo.css';
import MentorsYourResume from './mentorsYourResume';
import OnChainIcon from '../../assets/icon/snapbrillia_on_chain_icon.png';
import Avatar from './avatar';

const MentorsPersonalInfo = ({
  user,
  resumeFile,
  setResumeFile,
  newLocation,
  setNewLocation,
}) => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={12} sm={12} md={12} className="mentors-personal-info-title">
          {'Personal information'}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} className="mentors-personal-info-subtitle">
          {
            'The forms you fill out below will be seen by potential mentees and bounty posters.'
          }
        </Col>
      </Row>
      <Row>
        <div className="mentors-your-resume-line-below">
          Profile Information
        </div>
      </Row>
      <Row className="mentors-personal-info-undertitle">
        <Col xs={6} md={4} className="mentors_personal_information_mobile">
          <Avatar />
        </Col>
        <Col
          className="mentors_personal_information_content_container"
          xs={6}
          md={8}
        >
          <Row className="mentors_personal_information_content_title_row_name mx-1">
            <Col>{'Full Name*'}</Col>
          </Row>
          <Row className="mentors_personal_information_content_profile mx-1">
            <Col>{user?.fullName}</Col>
          </Row>
          <Row className="mentors_personal_information_content_title_row_location  mx-1">
            <Col>{'Location'}</Col>
          </Row>
          <Row className="mentors_personal_information_content_profile mx-1">
            <Col>
              <input
                style={{
                  height: '39px',
                  borderRadius: '5px',
                  border: 'none',
                  background: '#F4F4F4F4',
                  width: '100%',
                }}
                onChange={(e) => setNewLocation(e.target.value)}
                value={newLocation}
                name="location"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Col xs={12} sm={12} md={8} className="mentors-your-resume-line-below">
        {'Your On-Chain Reputation'}
      </Col>
      <Col xs={12} sm={12} md={8} className="mentors-personal-info-view-resume">
        <img src={OnChainIcon} alt="onchain-icon" width={25} />{' '}
        {'View On-Chain Reputation'}
      </Col>
      <Col xs={12} md={12}>
        <MentorsYourResume
          user={user}
          resumeFile={resumeFile}
          setResumeFile={setResumeFile}
        />
      </Col>
    </Container>
  );
};

export default MentorsPersonalInfo;
