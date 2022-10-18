import { navigate } from '@reach/router';
import { useEffect } from 'react';

//Components
import { Col, Container, Row } from 'react-bootstrap';
import SimilarBounty from './components/similarBounty';
import Tooltip from './components/tooltip';
import BountyDescription from './components/bountyDescription';
import NavBar from '../shared/menus/navBar';

//Icons
import BackIcon from '../assets/icon/snapbrillia_softwareengineerback_icon.png';

//CSS
import { useBounty } from '../hooks/useBounty';

const Bounty = ({ id }) => {
  const { bounty, loading, assessment } = useBounty(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row>
          <Col xs={12} className="mb-3">
            <span className="pointer" onClick={() => navigate('/bounties')}>
              <img src={BackIcon} alt="back-icon" />
              <span className="fs-5 primary medium ms-2">
                <u>Back to Gigs</u>
              </span>
            </span>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={12}>
            <Tooltip
              bounty={bounty}
              loading={loading}
              assessment={assessment}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <BountyDescription bounty={bounty} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <div className="medium my-4">
              <span className="primary">Was this helpful? </span>
              <img
                src={ThumbsUpIcon}
                alt="thumbs-up"
                className="pointer"
                width={20}
              />
              {' | '}
              <img
                src={ThumbsDownIcon}
                alt="thumbs-down"
                className="pointer"
                width={20}
              />
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col xs={12}>
            <SimilarBounty />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Bounty;
