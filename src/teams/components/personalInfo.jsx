import React, { useState, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonComponent from '../../profilePages/components/buttonComponent';

import Github from '../../assets/icon/snapbrillia_github_actual_icon.svg';
import Linkedin from '../../assets/icon/snapbrillia_linkedin_actual_icon.svg';
import Discord from '../../assets/icon/snapbrillia_discord_actual_icon.svg';
import Photo from '../../assets/profile-photo.jpeg';
import Empty from '../../assets/icon/snapbrillia_empty_profile_icon.svg';
import * as fileApi from '../../api/files';

import '../css/personalInfo.css';

const PersonalInfo = () => {
  const [profileData, setProfileData] = useState(Photo);
  const inputPhoto = useRef();

  const handleFileUpload = async () => {
    // const formData = new FormData();
    // formData.append('avatar', selectedFile);
    // const { filename } = await fileApi.uploadAvatar(formData, isUpload);
    // handleSave(filename);
    // setSource(avatar);
    // closeModal();
  };

  return (
    <Container>
      <Row className="h1 personal-info-title">Personal Information</Row>
      <Row className="personal-info-description">
        Looks like you're missing some personal information. The forms you fill
        out below will be seen by mentors, other team members and bounty
        posters.
      </Row>
      <Row className="personal-info-bottom">
        <Col
          className="personal-info-photo-column"
          style={{ padding: 0 }}
          xs={12}
          lg={4}
          xl={2}
        >
          <div
            style={{
              // minWidth: "100%",
              minHeight: '200px',
              backgroundImage: `url(${profileData})`,
              // backgroundSize: "contain",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="personal-info-photo"
          >
            {/* <img src={profileData} /> */}
            {console.log('profileData', profileData)}
            <div className="buttons">
              <input
                type="file"
                id="personal_info_file"
                ref={inputPhoto}
                style={{ display: 'none' }}
                accept={'image/jpeg, image/png, image/gif'}
                onChange={(e) => {
                  setProfileData(URL.createObjectURL(e.target.files[0]));
                }}
                onLoad={(e) => {
                  console.log('revoked');
                  URL.revokeObjectURL(e.target.files[0]);
                }}
              />
              <div
                onClick={() => {
                  inputPhoto.current.click();
                }}
                className="text"
              >
                Replace
              </div>
              &nbsp;|&nbsp;
              <span
                onClick={() => {
                  if (
                    window.confirm(
                      'Are you sure you want to remove the current profile photo?'
                    )
                  ) {
                    document.getElementById('personal_info_file').value = '';
                    setProfileData(Empty);
                  }
                }}
                className="text"
              >
                Remove
              </span>
            </div>
          </div>
        </Col>
        <Col className="px-xs-0 px-xl-5" xs={12} lg={8} xl={4}>
          <Row className="personal-info-tag">Full Name*</Row>
          <Row className="formHeader personal-info-name">Dennis Makuyev</Row>
          <Row className="personal-info-tag">Location</Row>
          <Row>
            <input className="location" />
          </Row>
        </Col>
        <Col className="personal-info-connections-container">
          <Row className="personal-info-connections bg-light ms-2 p-2">
            <Col xs={1} className="pt-1">
              <img src={Github} alt="github-icon" />
            </Col>
            <Col className="middle">
              <Row>
                <span className="ps-2 bold primary">Github</span>
              </Row>
              <Row>
                <span className="connect-text ps-2">
                  Connect to active account
                </span>
              </Row>
            </Col>
            <Col>
              <span className="float-end pe-1 not-connected">
                Not Connected
              </span>
            </Col>
          </Row>
          <Row className="personal-info-connections bg-light ms-2 p-2">
            <Col xs={1} className="pt-1">
              <img scr={Linkedin} alt="linkedIn-icon" />
            </Col>
            <Col className="middle">
              <Row>
                <span className="ps-2 bold primary">LinkedIn</span>
              </Row>
              <Row>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 8,
                  }}
                >
                  <input type="checkbox" name="linkedin" />
                  <span className="connected-text ">
                    Do not share my LinkedIn with mentees
                  </span>
                </label>
              </Row>
            </Col>
            <Col xs={1}>
              <span className="float-end pe-1 connected">Connected</span>
            </Col>
          </Row>
          <Row className="personal-info-connections bg-light ms-2 p-2">
            <Col xs={1} className="pt-1 icons">
              <img src={Discord} alt="discord-icon" />
            </Col>
            <Col className="middle">
              <Row>
                <span className="ps-2 bold primary">Discord</span>
              </Row>
              <Row>
                <span className="connect-text ps-2">
                  Connect to active account
                </span>
              </Row>
            </Col>
            <Col>
              <span className="float-end pe-1 not-connected">
                Not Connected
              </span>
            </Col>
          </Row>
          {/* <ButtonComponent /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
