import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../shared/css/typography.css';
import './css/featuredBounties.css';
import { navigate } from '@reach/router';
import * as bountyApi from '../../api/bounty';
import { BountyImage } from '../../shared/images';
import formatCurrency from '../../shared/utils';
export default function FeaturedBounties() {
  const [featureBounties, setFeatureBounties] = useState([]);
  const getAllFeatureBounties = async () => {
    try {
      const { docs } = await bountyApi.getFeatureBounties(2);
      setFeatureBounties(docs);
    } catch (error) {}
  };

  //scroll to top function
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    getAllFeatureBounties();
  }, []);
  return (
    <Container className="px-5 pb-5 pt-3">
      <Row className="mb-2">
        <Col className="p-0">
          <span className="fs-2 text-black p-0">Featured Gigs</span>
        </Col>
      </Row>
      <Row className="gap-3">
        {featureBounties.map((item, index) => {
          return (
            <Col
              key={index}
              className="featured-bounties p-3 bold pointer"
              onClick={() => {
                navigate(`/bounties/${item._id}`);
                topFunction();
              }}
            >
              <Row>
                <Col>
                  <h5 className="bounty-title-text-color bold">{item.name}</h5>
                </Col>
                <Col md={4}>
                  <div className="float-end">
                    <span className="reward-title">Gig Reward</span>
                    <h5 className="reward-amount-text-color bold text-end">
                      {formatCurrency(item)}
                    </h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={BountyImage(item)}
                    className="company-logo"
                    alt="company logo"
                  />
                  <span className="bounty-link">
                    {item.companyId?.companyName}
                  </span>
                </Col>
                <Col md={4}>
                  <span
                    className="view-bounty-link-text-color d-flex h-100 align-items-end justify-content-end pointer bold"
                    //onClick={() => navigate(`/bounties/${item._id}`)}
                  >
                    View Gig
                  </span>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
