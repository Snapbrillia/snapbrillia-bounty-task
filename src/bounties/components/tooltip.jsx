import React, { useState, useEffect } from 'react';
import '../css/tooltip.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToastMessage from './Toast';
import { Link } from '@reach/router';
import { BountyImage } from '../../shared/images';
import { format } from 'date-fns';
import formatCurrency from '../../shared/utils';
import ExpressInterestTooptip from './expressInterestTooptip';

export default function Tooltip_clickable({ bounty, loading, assessment }) {
  const [canExpress, setCanExpress] = useState(true);
  const [canJoin, setCanJoin] = useState(false);
  const [showTooltip, setShowTooltip] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (['accepted', 'rejected'].includes(assessment?.status)) {
      setCanExpress(false);
    }
    if (assessment?.status === 'accepted') {
      setCanJoin(true);
    }
  }, [assessment]);

  return (
    <div className="tooltip-box px-2">
      <Row>
        <Col className="tooltip-box-title-section">
          <h3 className="tooltip-box-title col-9">{bounty.name}</h3>
          <div className="col-3">
            <h3 className="bounty-reward-text">Gig Reward</h3>
            <h3 className="money-text">{formatCurrency(bounty)}</h3>
          </div>
        </Col>

        <Col>
          <Row>
            <div className="company-name px-4 mt-4 mt-sm-0">
              <img src={BountyImage(bounty)} className="company-logo" alt="..." />
              {bounty.companyId?.companyName}
            </div>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={1} className="section1">
           {/* <span
          //   className={`text-nowrap tool-tip-difficulty ${
          //     bounty.difficulty || 'easy'
          //   }`}
          // >
          //   {bounty.difficulty || 'medium'} 
          {bounty.teamPreference}> 
          </span> */}<span className="text-nowrap tool-tip-teampreference top-text">{bounty.teamPreference == true ? "Teams Only" : "Open to All"}</span>
          <div className="text-nowrap bottom-sub-text">Team Preference</div>
          <div className="bottom-text tool-tip-time">
            {bounty.timeEstimation} hours
            <div className="bottom-sub-text">Time Estimation</div>
          </div>
          <div className="coding-language-text mt-3 d-block d-sm-none">
            <div className="triangle">
              <p className="top-text translate-middle-y main-language">
                {/* {bounty.skills &&
                  Object.keys(bounty.skills).length > 0 &&
                  Object.keys(bounty.skills)} */}
              </p>
            </div>
            <h3 className="top-sub-text">Skills</h3>
          </div>
        </Col>
        <Col xs={2} className="section2">
          <div className="circle">
            <p className="top-text translate-middle-y bounty-status">
              {bounty.status}
            </p>
          </div>
          <div className="top-sub-text">Status</div>
          <div className="bottom-text">
            {format(new Date(Date(bounty.createdAt)), 'MM/dd/yyyy')}
            <div className="bottom-sub-text">Date</div>
          </div>
          <div className="web3-text mt-2 d-block d-sm-none">
            {bounty.permissionLess == true ? "Accept All" : "Need Approval"}
            <p className="bottom-sub-text">Permission</p>
          </div>
        </Col>
        <Col className="section3 d-none d-sm-block">
          <div className="coding-language-text">
            <div className="triangle">
              <p className="top-text text-nowrap translate-middle-y text-truncatee">
              <span>
                {bounty.skills?.join(' and ')}
              </span>
              </p>
            </div>
            <h3 className="top-sub-text">Skills</h3>
          </div>
          <div className="web3-text">
          {bounty.permissionLess ? "Accept All" : "Applications"}
            <p className="bottom-sub-text">Permission</p>
          </div>
        </Col>
        <Col xs={12} lg={4} className="pt-lg-5 mt-3">
          <div className="text-end pt-xs-3 pt-lg-5 me-2">
            {/* <Link
              style={{ textDecoration: 'none', color: '#605F92' }}
              to="/submit"
            >
              <svg
                width="14"
                height="20"
                viewBox="0 2 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 14.1365C13.4489 14.1365 12.8067 14.4378 12.3156 14.9096L5.58167 10.743C5.62889 10.512 5.66667 10.2811 5.66667 10.0402C5.66667 9.7992 5.62889 9.56827 5.58167 9.33735L12.24 5.21084C12.75 5.71285 13.4206 6.0241 14.1667 6.0241C15.7344 6.0241 17 4.67871 17 3.01205C17 1.34538 15.7344 0 14.1667 0C12.5989 0 11.3333 1.34538 11.3333 3.01205C11.3333 3.25301 11.3711 3.48394 11.4183 3.71486L4.76 7.84137C4.25 7.33936 3.57944 7.02811 2.83333 7.02811C1.26556 7.02811 0 8.37349 0 10.0402C0 11.7068 1.26556 13.0522 2.83333 13.0522C3.57944 13.0522 4.25 12.741 4.76 12.239L11.4844 16.4157C11.4372 16.6265 11.4089 16.8474 11.4089 17.0683C11.4089 18.6847 12.6461 20 14.1667 20C15.6872 20 16.9244 18.6847 16.9244 17.0683C16.9244 15.4518 15.6872 14.1365 14.1667 14.1365Z"
                  fill="#2D2B6F"
                />
              </svg>
              <span className="share-link">Share</span>
            </Link> */}
            {!loading && !canJoin && (
              <button
                onBlur={() =>
                  setTimeout(() => {
                    if (showTooltip) {
                      setShowTooltip(!showTooltip);
                    }
                  }, 200)
                }
                onClick={() => {
                  if (canExpress) {
                    setShowTooltip(!showTooltip);
                  }
                }}
                className={
                  canExpress
                    ? 'express-interest-button'
                    : 'express-interest-button-disabled'
                }
                disabled={!canExpress}
              >
                {canExpress ? ' Express Interest' : 'Expressed'}
              </button>
            )}
            {!loading && canJoin && !bounty.useGithubApp && (
              <Link
                className="btn-primary-medium"
                as={Link}
                to={`/bounties/${bounty._id}/eeo-form`}
              >
                Submit Work
              </Link>
            )}
            {!loading && canJoin && bounty.useGithubApp && (
              <Link
                className="btn-primary-medium"
                as={Link}
                to={`/bounties/${bounty._id}/eeo-form`}
              >
                Launch IDE
              </Link>
            )}
            {showTooltip && (
              <div className="express-interest-tooltip-placement">
                <ExpressInterestTooptip setShow={setShow} bounty={bounty} />
              </div>
            )}
            <ToastMessage
              show={show}
              tooltip_toast={true}
              setShow={setShow}
              autohide={false}
              message={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  You have expressed your interest as an individual. User will
                  contact if your request is approved. Click confirm to proceed.
                  <span
                    style={{
                      paddingTop: '12px',
                    }}
                  >
                    <a
                      className="btn-continue"
                      href="/bounties"
                      style={{
                        float: 'right',
                        fontSize: '15px',
                        color: 'black',
                      }}
                    >
                      Confirm
                    </a>
                  </span>
                </div>
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
