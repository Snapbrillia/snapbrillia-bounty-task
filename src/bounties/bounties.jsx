import React, { useState, useEffect } from 'react';

//COMPONENTS
import { Container, Row, Col } from 'react-bootstrap';
import BountyIllustratoin from '../assets/illustrations/snapbrillia_bounty_page_illustration.png';
import NavBar from '../shared/menus/navBar';
import AllBounties from './components/allBounties';
import FeaturedBounties from './components/featuredBounties';
import BountySideMenu from '../shared/menus/bountySideMenu';
import CreateNewBountyButton from '../shared/button/createNewBounty';

//CSS
import '../shared/css/sharedStyles.css';

export default function Bounties() {
  const [bountiesFilters, setBountiesFilters] = useState({
    search: '',
    status: null,
    difficulty: [],
    timeEstimationType: [],
    languages: [],
    teams: [],
    // teamsOnly: false,
    teamPreference : null,
    mentorAvailable: false,
    permissionLess: null,
    skills: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={12} lg={7}>
            <Row>
              <div className="h1 px-5 py-2">Gigs</div>
            </Row>
            <Row className="px-5">
              <span className="p-0" style={{ color: '#808080' }}>
                Snapbrillia’s Gigs are a great way to learn, grow, and earn some
                dough. Flex your skills and support the community by fixing bugs
                and helping the best and brightest build the solutions of
                tomorrow. <br />
                <br />
                Apply as a <span style={{ fontWeight: 'bold' }}>Mentor</span> if
                you feel like you’re ready to lead a team; a{' '}
                <span style={{ fontWeight: 'bold' }}>{'Mentee'}</span> if you’re
                looking to learn more; or as an{' '}
                <span style={{ fontWeight: 'bold' }}>{'Individual'}</span> if
                you want to tackle a problem on your own. <br />
                <br />
                Check out the exciting projects that await you below!
                <br />
              </span>
              <div align="right">
                <CreateNewBountyButton />
              </div>
            </Row>
          </Col>
          <Col lg={5} className="d-none d-lg-block">
            <div className="px-3">
              <img
                className="w-100"
                src={BountyIllustratoin}
                alt="bounti-img"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <BountySideMenu
              bountiesFilters={bountiesFilters}
              setBountiesFilters={setBountiesFilters}
            />
          </Col>
          <Col>
            <Row>
              <FeaturedBounties />
            </Row>
            <Row>
              <AllBounties bountiesFilters={bountiesFilters} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
