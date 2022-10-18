import React from 'react';

//COMPONENTS
import { Row, Col, Container } from 'react-bootstrap';
import GrantSetupMatching from './grantSetupMatching';
import GrantSetupTabs from './grantSetupTabs';
import Back from '../../assets/icon/snapbrillia_softwareengineerback_icon.png';
import NextBtn from '../../shared/button/next';
import BackBtn from '../../shared/button/back';
import { useAuth } from '../../context/authContext';

//CSS
import '../css/grantReview.css';

const GrantReview = ({ grant, review, setReview, createGrant, loading }) => {
  const { auth } = useAuth();

  const handleGrantBackButton = () => {
    return setReview(false);
  };

  return (
    <>
      <Container fluid className="grant-review-container">
        <div className="px-5 pb-5 grant-review-main">
          <Row onClick={handleGrantBackButton} className="grant-review-back">
            <div className="grant-review-back-button">
              <img src={Back} alt="back-icon" />
            </div>
            Back To Grant Creation
          </Row>
          <Row>
            <GrantSetupMatching user={auth.user} grant={grant} />
          </Row>
          <Row>
            <GrantSetupTabs review={review} grant={grant} />
          </Row>
        </div>
        <Row className="grant-setup-buttons justify-content-center text-center justify-content-lg-end mt-5 pb-2">
          <Col xs={5} lg={2} xxl={1}>
            <BackBtn
              onClick={() => {
                setReview(false);
              }}
            />
          </Col>
          <Col xs={5} lg={2}>
            {loading ? (
              'loading...'
            ) : (
              <NextBtn btnText={'Accept'} onClick={() => createGrant()} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GrantReview;
