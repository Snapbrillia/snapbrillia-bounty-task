import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
//CSS
import '../css/grantsList.css';
import { timeAgo } from '../../shared/utils.js';
import { UserImage } from '../../shared/images';

const ContributorItem = ({ grant }) => {
  return (
    <Container>
      {grant.funderIds?.map((e, i) => {
        return (
          <Row
            key={i}
            style={{ position: 'relative', left: '12px' }}
            className="align-items-center contributor-bg"
          >
            <Col>
              <Row className="align-items-center">
                <Col xs={2}>
                  <img className="contributor-item" src={UserImage(e)} alt='profile-logo'/>
                </Col>
                <Col>
                  <h4 className="h3 ms-3 bold m-0">{e.fullName}</h4>
                  <span className="ms-3 grey-title">Contributor</span>
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <h5 className="bold m-0">
                1.75 <span>ADA</span>
              </h5>
              <span className="grey-title">Contribution</span>
            </Col>
            <Col className="text-center">
              <h5 className="bold m-0">Successful</h5>
              <span className="grey-title">Transaction Status</span>
            </Col>
            <Col className="text-center">
              <h5 className="bold m-0">{timeAgo(e.updatedAt)}</h5>
              <span className="grey-title">Time</span>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default ContributorItem;
