import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Individual from '../../assets/icon/snapbrillia_individual_icon.png';
import GrantsLink from '../../assets/icon/snapbrillia_grants_link-icon.svg';
import Clock from '../../assets/icon/snapbrillia_clock_icon.svg';
import Goal from '../../assets/icon/snapbrillia_goal_flag_icon.svg';
import Internet from '../../assets/icon/snapbrillia_internet_global_icon.svg';
import AddToCart from '../../shared/button/addToCart';

import '../css/grantsMatching.css';
import { useCart } from '../../context/cartContext';
import {
  formatPrefix,
  formatTrailingCurrency,
  timeAgo,
} from '../../shared/utils.js';
import { GrantImage } from '../../shared/images';

const GrantsMatching = ({ grant, user }) => {
  const { cart, addItem } = useCart();

  const {
    name,
    projectLogo,
    tags,
    url,
    fundraisingAmount,
    website,
    updatedAt,
    currentAmount,
    currencyType,
  } = grant;

  return (
    <Container className="" fluid>
      <Row className="gx-xs-0 gx-xl-5">
        <Col xs={12} md={3} xl={2}>
          <div className="grant-matching-icon ">
            <img
              className={`${
                projectLogo
                  ? 'grant-matching-thumbnail'
                  : 'grant-matching-defualt-icon'
              }`}
              src={GrantImage(grant)}
              alt="grant-logo"
            ></img>
          </div>
        </Col>
        <Col className="grant-matching-details-col" xs={12} md={9} xl={6}>
          <div className="p-3 grant-matching-container">
            <Row className="h1 grant-matching-title">{name || ''}</Row>
            <div className="grant-matching-tags">
              {tags &&
                tags.map((tag, i) => (
                  <div key={i} className="grant-matching-single-tag">
                    {tag}
                  </div>
                ))}
            </div>
            <Row className="grant-matching-details grey-title">
              <Col xs={6}>
                <Row className="py-1">
                  <div className="line">
                    <span className="grant-matching-svgs">
                      <img src={Individual} alt="individual-icon" />
                    </span>
                    Created by: <span className="link">{user?.fullName}</span>
                  </div>
                </Row>
                <Row className="py-1 ">
                  <div className="line">
                    <span className="grant-matching-svgs">
                      <img src={Goal} alt="goal-icon" />
                    </span>
                    Goal:{' '}
                    <b>{`${formatPrefix(grant)} ${grant.fundraisingAmount}`}</b>{' '}
                    <span className="currency">
                      {formatTrailingCurrency(grant)}
                    </span>
                  </div>
                </Row>
                <Row className="py-1">
                  <div className="line">
                    <span className="grant-matching-svgs">
                      <img src={GrantsLink} alt="grants-link-icon" />
                    </span>
                    Repository:{' '}
                    <a
                      href={url && url.includes('://') ? url : '//' + url}
                      rel="noopener"
                      className="link"
                    >
                      {url && url.includes('github')
                        ? 'Github'
                        : url && url.includes('bitbucket')
                        ? 'Bitbucket'
                        : url}
                    </a>
                  </div>
                </Row>
                <Row className="py-1">
                  <div className="line">
                    <span className="grant-matching-svgs">
                      <img src={Clock} alt="clock-icon" />
                    </span>
                    Last Updated: <b>{timeAgo(updatedAt)}</b>
                  </div>
                </Row>
              </Col>
              <Col xs={6}>
                <Row className="py-1">
                  <div className="line">
                    <span className="grant-matching-svgs">
                      <img src={Internet} alt="internet-icon" />
                    </span>
                    Website:{' '}
                    <a
                      href={
                        website && website.includes('://')
                          ? website
                          : '//' + website
                      }
                      rel="noopener"
                      className="link"
                    >
                      {website}
                    </a>
                  </div>
                </Row>
                <Row className="py-1">
                  {user?.facebook && (
                    <div className="line">
                      <span className="grant-matching-svgs">
                        <img src={Internet} alt="internet-icon" />
                      </span>
                      Facebook:{' '}
                      <a href={user?.facebook} className="link">
                        @
                        {user?.facebook?.slice(
                          user.facebook.lastIndexOf('/') + 1
                        )}
                      </a>
                    </div>
                  )}
                </Row>
                <Row className="py-1">
                  {user?.twitter && (
                    <div className="line">
                      <span className="grant-matching-svgs">
                        <img src={Internet} alt="internet-icon" />
                      </span>
                      Twitter:{' '}
                      <a href={user?.twitter} className="link">
                        @
                        {user?.twitter?.slice(
                          user.twitter.lastIndexOf('/') + 1
                        )}
                      </a>
                    </div>
                  )}
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          className="grant-matching-container grant-matching-stats"
          xs={12}
          xl={4}
        >
          <Row>
            <div className="px-3 py-2 title">Currently Raised</div>
          </Row>
          <Row>
            <div className="fund">
              <span className="fund-cur">
                {`${formatPrefix(grant)} ${grant.currentAmount}`}
              </span>
              <span className="fund-total">
                /{`${grant.fundraisingAmount} ${formatTrailingCurrency(grant)}`}
              </span>
            </div>
          </Row>
          <Row className="d-flex align-items-end share-fav-button">
            <Col xs={2}>{/* <ShareButton /> */}</Col>
            <Col xs={4}>
              {/* <div className="fav">
                <span className="grant-matching-svgs">
                  <img src={Fav} alt="fav-icon" />
                </span>
                Add To Favorites
              </div> */}
            </Col>
            <Col
              className="d-flex justify-content-end"
              xs={{ offset: 2, span: 4 }}
            >
              <div onClick={() => addItem(grant)}>
                {cart?.find((element) => element.id === grant._id) ? (
                  'In cart'
                ) : (
                  <AddToCart />
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GrantsMatching;
