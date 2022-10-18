import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from '@reach/router';

import '../css/noTeam.css';
import '../../shared/css/textColors.css';

export default function NoTeam() {
  return (
    <Container className="no-team-container">
      <Row className="primary no-team-title">
        <div>You don't have work yet!</div>
      </Row>

      <Row>
        <div className="no-team-content small-text">
          Take one of our{' '}
          <Link to="/bounties">
            <span className="no-team-bounties ui-text-black">gigs</span>
          </Link>{' '}
          to join work
        </div>
      </Row>
    </Container>
  );
}
