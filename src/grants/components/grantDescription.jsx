//COMPONENTS
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//CSS
import '../css/grantDescription.css';
import '../../shared/css/typography.css';

import { UserImage } from '../../shared/images';

function GrantDescription({ grant }) {
  return (
    <Container>
      <div className="grant-descr-container">{grant.description}</div>
      <div>
        <Row>
          <p className="bold">Team:</p>
        </Row>
        <Row>
          <Col xs={3} key={'-1'}>
            <Row>
              <Col xs={3}>
                <img
                  src={UserImage(grant.candidateId)}
                  alt="team member profile"
                  className="team-img"
                ></img>
              </Col>
              <Col xs={9}>
                <p className="member-name">{grant.candidateId?.fullName}</p>
                <p className="member-title">Creator</p>
              </Col>
            </Row>
          </Col>
          {grant.memberIds?.map((item, i) => {
            return (
              <Col xs={3} key={i}>
                <Row>
                  <Col xs={3}>
                    <img
                      src={UserImage(item)}
                      alt="team member profile"
                      className="team-img"
                    ></img>
                  </Col>
                  <Col xs={9}>
                    <p className="member-name">{item.fullName}</p>
                    <p className="member-title">Developer</p>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default GrantDescription;
