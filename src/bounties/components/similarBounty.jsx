import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { navigate } from '@reach/router';
import * as bountyApi from '../../api/bounty';

import '../../shared/css/buttonStyles.css';
import '../css/similarBounty.css';
import { BountyImage } from '../../shared/images';
import formatCurrency from '../../shared/utils';

const SimilarBounty = () => {
  const [similarBounties, setSimilarBounties] = useState([]);
  const getSimilarBounties = async () => {
    const { docs } = await bountyApi.getSimilarBounties(3);
    setSimilarBounties(docs);
  };

  useEffect(() => {
    getSimilarBounties();
  }, []);

  return (
    <>
      <Row className="bold">
        <Col>Similar Gigs:</Col>
      </Row>
      <Container fluid className="my-5">
        <Row className="gap-5">
          {/* Column 1 */}
          {similarBounties.map((bounty, index) => {
            return (
              <Col className="my_similar_bounties_bg" key={bounty._id}>
                <Row style={{ paddingLeft: '16px' }}>
                  <Col className="my_similar_bounties_task_name">
                    <Row
                      style={{ paddingTop: '24px', boxSizing: 'content-box' }}
                    >
                      {bounty.name}
                    </Row>
                  </Col>
                  <Col>
                    <Row
                      style={{ paddingTop: '24px', boxSizing: 'content-box' }}
                      className="my_similar_bounties_reward_title"
                    >
                      <div className="pull-right">Gig Reward</div>
                    </Row>
                    <Row className="my_similar_bounties_reward_cash">
                      <div className="pull-right">{formatCurrency(bounty)}</div>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ paddingLeft: '16px' }}>
                  <Col>
                    <Row style={{ height: '20px' }}>
                      <Col className="my_similar_bounties_company_name">
                        <img
                          src={BountyImage(bounty)}
                          className="company-logo"
                          alt="company logo"
                        />
                        {bounty.companyId?.companyName}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row
                      style={{
                        paddingBottom: '13px',
                        boxSizing: 'content-box',
                      }}
                      className="my_similar_bounties_view_bounty"
                    >
                      <div
                        className="float-end"
                        onClick={() => navigate(`/bounties/${bounty._id}`)}
                      >
                        {'View Bounty'}
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SimilarBounty;
