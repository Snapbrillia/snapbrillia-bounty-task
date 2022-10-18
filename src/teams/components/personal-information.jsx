import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import image from '../../assets/profile-photo.jpeg';

import '../css/personal-information.css';

const testName = 'Dennis Makuyev';
const testEmail = 'superlongemailname@gmail.com';

const PersonalInformation = () => {
  return (
    <Container fluid>
      <Row
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
        className="personal_information_title"
      >
        {'Personal information'}
      </Row>
      <Row
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
        className="personal_information_subtitle"
      >
        {
          'Looks like you’re missing some personal information. Fill out the empty fields in the form below to begin the mentor process.'
        }
      </Row>
      <Row>
        <Col
          xs={5}
          sm={5}
          md={4}
          lg={3}
          xl={2}
          xxl={2}
          className="personal_information_profile_photo"
        >
          <div className="shadow p-0 mb-3 bg-white rounded-circle personal_information_picture_profile">
            <img
              src={image}
              alt="profile"
              height={170}
              width={170}
              style={{ borderRadius: '50%' }}
            />
            <div
              className="flex-column justify-content-center align-items-center personal_information_picture_edit_profile"
              style={{ background: '#A900A699' }}
            >
              <span className="flex">remove</span>
              <span className="flex">replace</span>
            </div>
          </div>
        </Col>
        <Col xs={7} sm={7} md={8} lg={9} xl={2} xxl={2}>
          <Row className="personal_information_content_title_row_name">
            {'Full Name*'}
          </Row>
          <Row className="personal_information_content_profile">{testName}</Row>
          <Row className="personal_information_content_title_row_email">
            {'Email*'}
          </Row>
          <Row className="personal_information_content_profile">
            {testEmail}
          </Row>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={4} xxl={4}>
          <Row className="personal_information_content_title_row_1">
            {'Location*'}
          </Row>
          <Row className="personal_information_content_input">
            <input
              style={{
                height: '39px',
                borderRadius: '5px',
                border: 'none',
                background: '#F4F4F4F4',
              }}
            />
          </Row>
          <Row className="personal_information_content_title_row_2">
            {'Discord Username'}
          </Row>
          <Row className="personal_information_content_input">
            <input
              style={{
                height: '39px',
                borderRadius: '5px',
                border: 'none',
                background: '#F4F4F4F4',
              }}
            />
          </Row>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={4} xxl={4}>
          <Row className="personal_information_content_title_row_1">
            {'LinkedIn URL'}
          </Row>
          <Row className="personal_information_content_input">
            <input
              style={{
                height: '39px',
                borderRadius: '5px',
                border: 'none',
                background: '#F4F4F4F4',
              }}
            />
          </Row>
          <Row className="personal_information_content_title_row_2">
            {'Github URL'}
          </Row>
          <Row className="personal_information_content_input">
            <input
              style={{
                height: '39px',
                borderRadius: '5px',
                border: 'none',
                background: '#F4F4F4F4',
              }}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInformation;
