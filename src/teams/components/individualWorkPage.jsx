import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImproveToolTip from '../../bounties/components/improveToolTip';
import NavBar from '../../shared/menus/navBar';
import IndividualWorkTabs from './individualWorkTabs';
import { navigate } from '@reach/router';
import { useParams } from '@reach/router';
import * as bountyAPI from '../../api/bounty';
import BackIcon from '../../assets/icon/snapbrillia_softwareengineerback_icon.png';

function IndividualWorkPage() {
  const { id } = useParams();
  const [bounty, setBounty] = useState({});
  const [assessment, setAssessment] = useState({});

  const loadWorkInfo = async () => {
    try {
      const bounty = await bountyAPI.getBounty(id);
      const assessment = await bountyAPI.getMyAssessment(id);
      setAssessment(assessment);
      setBounty(bounty);
    } catch (err) {}
  };

  useEffect(() => {
    loadWorkInfo();
  }, []);
  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row className="mb-3">
          <Col xs={12} lg={12}>
            <span className="pointer link" onClick={() => navigate('/teams')}>
              <img
                src={BackIcon}
                alt="back-icon"
                className="mb-1 me-1"
                width={10}
              />
              <span className="primary ms-1">Back to Work</span>
            </span>
          </Col>
        </Row>
        <Row>
          <ImproveToolTip bounty={bounty} assessment={assessment} />
        </Row>
        <Row className="mt-5">
          <IndividualWorkTabs bounty={bounty} />
        </Row>
      </Container>
    </>
  );
}

export default IndividualWorkPage;
