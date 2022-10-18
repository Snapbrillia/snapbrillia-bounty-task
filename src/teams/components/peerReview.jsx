import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { Rating } from 'react-simple-star-rating';
import Photo from '../../assets/profile-photo.jpeg';
import Save from '../../shared/button/save';

import '../css/peerReview.css';

const PeerReview = () => {
  const [rating, setRating] = useState(0);
  return (
    <Container fluid>
      <Row className="h2">Read your peer reviews</Row>
      <Row className="peer-review-container d-flex">
        <Col className="peer-review-main-left" xs={12}>
          <Row>
            <Col xs={12} lg={3} className="h3 mb-0 peer-review-profile-photo">
              <Row className=" ">
                <Col style={{ padding: 0 }} xs={4} lg={5}>
                  <div
                    style={{
                      minWidth: '60px',
                      minHeight: '60px',
                      maxHeight: '150px',
                      maxWidth: '150px',
                      backgroundImage: `url(${Photo})`,
                      // backgroundSize: 'contain',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className="peer-review-photo"
                  ></div>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'center' }}>
                  <span>ninh</span>
                </Col>
              </Row>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={3}
              className="peer-review-label"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Work Done
            </Col>
            <Col
              xs={12}
              md={4}
              lg={3}
              className="peer-review-label"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              2 Months Ago
            </Col>
            <Col xs={12} md={4} lg={3} className="peer-review-main-right">
              <Row>Your Rating:</Row>
              <Row
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  marginLeft: 35,
                }}
                className="peer-review-rating-small"
              >
                <Rating
                  size={25}
                  readonly={true}
                  style={{
                    height: '30px',

                    // width: '200px',
                  }}
                  onClick={(rate) => {
                    setRating(rate);
                  }}
                  ratingValue={rating}
                  allowHalfIcon={true}
                />
              </Row>
            </Col>
          </Row>
          <Row className="policy_typography peer-review-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Row>
        </Col>
      </Row>
      <Row className="h3 peer-review-title">Write a peer review</Row>
      <Row className="peer-review-rating">
        <Rating
          style={{ padding: 0 }}
          size={50}
          onClick={(rate) => {
            setRating(rate);
          }}
          ratingValue={rating}
          allowHalfIcon={true}
        />
      </Row>
      <Row>
        <textarea className="peer-review-textarea" id="description"></textarea>
      </Row>
      <Row className="peer-review-button-row">
        <div className="peer-review-button">
          <Save />
        </div>
      </Row>
    </Container>
  );
};

export default PeerReview;
