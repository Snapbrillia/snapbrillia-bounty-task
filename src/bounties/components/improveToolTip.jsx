import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';

//COMPONENT
import GitHubIcon from '../../assets/icon/snapbrillia_github_actual_icon.png';
import { BountyImage } from '../../shared/images';
import formatCurrency from '../../shared/utils';
//CSS
import '../css/improveToolTip.css';
import '../../shared/css/bgColors.css';
import { Link } from '@reach/router';
import * as teamApi from '../../api/teams';

const ImproveToolTip = ({ bounty, assessment, team }) => {
  const start = async () => {
    try {
      const teamInfo = await teamApi.startTeam(team._id);
    } catch (err) {}
  };

  return (
    <Container fluid className="p-6">
      <Row className="cardbg py-2">
        <Row className="align-items-center mb-5">
          <Col xs={12} md={10}>
            <h1 className="h1">{bounty.name}</h1>
            <img
              src={BountyImage(bounty)}
              className="company-logo"
              alt="company logo"
            />
            <span className="link pointer ms-2">
              {bounty.companyId?.companyName}
            </span>
          </Col>
          <Col>
            <Row>
              <h3 className="bounty-reward-text">Gig Reward</h3>
            </Row>
            <Row>
              <h3 className="money-text">{formatCurrency(bounty)}</h3>
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} md={2}>
            <span className="text-nowrap tool-tip-teampreference top-text">
              {bounty.teamPreference == true ? 'Teams Only' : 'Open to All'}
            </span>
            <div className="text-nowrap bottom-sub-text">Team Preference</div>
          </Col>
          <Col xs={12} md={2}>
            <p
              className="m-0 medium tool-tip-status"
              style={{ color: '#32cd32' }}
            >
              {bounty.status}
            </p>
            <span className="grey-title">Status</span>
          </Col>
          <Col xs={12} md={2}>
            <span className="tool-tip-languages text-nowrap tool-tip-teampreference top-text">
              {bounty.skills?.join(' and')}
            </span>
            <div className="text-nowrap bottom-sub-text">Skills</div>
            {/* <p className="top-sub-text">Skills</p> */}
            {/* {bounty.languages &&
                Object.keys(bounty.languages).length > 0 &&
            //     Object.keys(bounty.languages)[0]} */}
            {/* // <span className="grey-title">Languages</span> */}
            {/* <div className="coding-language-text"> */}
            {/* <p className="tool-tip-languages top-text text-nowrap translate-middle-y text-truncate">

                {bounty.skills?.reduce(
                  function (previousValue, currentValue, index) {
                    return (
                      previousValue +
                      (index ===
                      bounty.skills?.length - 1
                        ? ' and '
                        : ', ') +
                      currentValue
                    );
                  }
                )}
              </p>
            <span className="grey-title">Skills</span> */}
            {/* </div> */}
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={2}>
            <p className="m-0 medium">{bounty.timeEstimation} hours</p>
            <span className="grey-title">Time Estimation</span>
          </Col>
          <Col xs={12} md={2}>
            <p className="m-0 medium">
              {format(
                bounty.createdAt ? new Date(bounty.createdAt) : new Date(),
                'MM/dd/yyyy'
              )}
            </p>
            <span className="grey-title">Date</span>
          </Col>
          <Col xs={12} md={2}>
            <p className="m-0 medium">{bounty.type}</p>
            <span className="grey-title">Permission</span>
          </Col>
          <Col xs={12} md={6} className="text-end mt-5 mt-md-0">
            {/* <img
              src={GitHubIcon}
              alt="github-icon"
              className="m-0 small tooltip-github-icon"
            />
            <span className="m-0 small">
              <a
                href={bounty.url}
                target="_blank"
                rel="noreferrer"
                className="link pointer me-4 ms-2"
              >
                View On GitHub
              </a>
            </span> */}
            {bounty.status === 'open' && (
              <>
                {team && team.mentor && team?.status === 'pending' && (
                  <button className="btn-primary-medium" onClick={start}>
                    Start
                  </button>
                )}
                {(!team || team.status !== 'pending') && !bounty.useGithubApp && (
                  <Link
                    className="btn-primary-medium"
                    as={Link}
                    to={`/bounties/${bounty._id}/eeo-form`}
                  >
                    Submit Work
                  </Link>
                )}
                {(!team || team.status !== 'pending') && bounty.useGithubApp && (
                  <Link
                    className="btn-primary-medium"
                    as={Link}
                    to={`/bounties/${bounty._id}/eeo-form`}
                  >
                    Launch IDE
                  </Link>
                )}
              </>
            )}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ImproveToolTip;
