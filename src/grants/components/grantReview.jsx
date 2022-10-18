import React, { useEffect, useState, useContext } from 'react';

//COMPONENTS
import { IntroGrantsContext } from '../introGrants';
import { Row, Container } from 'react-bootstrap';
import GrantsMatching from './grantsMatching';
import GrantsTabs from './grantsTabs';
import Back from '../../assets/icon/snapbrillia_softwareengineerback_icon.png';
import { useAuth } from '../../context/authContext';
import { getGrant } from '../../api/grant.js';

//CSS
import '../css/grantReview.css';

const GrantReview = () => {
  const { grantId, setGrantId } = useContext(IntroGrantsContext);
  const [grant, setGrant] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    if (grantId) {
      getGrant(grantId).then((data) => {
        setGrant(data);
      });
    }
  }, [grantId]);

  const handleGrantBackButton = () => {
    return setGrantId(null);
  };

  return (
    <>
      <Container fluid className="grant-review-container">
        <div className="px-5 pb-5 grant-review-main">
          <Row onClick={handleGrantBackButton} className="grant-review-back">
            <div className="grant-review-back-button">
              <img src={Back} alt="back-icon" />
            </div>
            Back to Grants
          </Row>
          <Row>
            <GrantsMatching user={grant.candidateId} grant={grant} />
          </Row>
          <Row>{grant && <GrantsTabs grant={grant} />}</Row>
        </div>
      </Container>
    </>
  );
};

export default GrantReview;
