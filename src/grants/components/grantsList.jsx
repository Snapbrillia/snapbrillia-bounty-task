import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

import '../../shared/css/typography.css';
import '../css/grantsList.css';
import '../../shared/css/buttonStyles.css';
import GrantClock from '../../assets/icon/snapbrillia_update_status_icon.svg';
import GrantFlag from '../../assets/icon/snapbrillia_goal_flag_icon.svg';
import { IntroGrantsContext } from '../introGrants';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import {
  formatGrantCurrentlyRaised,
  formatPrefix,
  formatTrailingCurrency,
  timeAgo,
} from '../../shared/utils';

function GrantsList({ grantsList }) {
  const [grantsCopy, setGrantsCopy] = useState([]);
  const { cart, addItem } = useCart();

  const { grantId, setGrantId, grantFilterQuery } =
    useContext(IntroGrantsContext);

  function fieldSorter(fields) {
    return function (a, b) {
      return fields
        .map(function (o) {
          var dir = 1;
          if (o[0] === '-') {
            dir = -1;
            o = o.substring(1);
          }
          if (a[o] > b[o]) return dir;
          if (a[o] < b[o]) return -dir;
          return 0;
        })
        .reduce(function firstNonZeroValue(p, n) {
          return p ? p : n;
        }, 0);
    };
  }

  useEffect(() => {
    let filterData = [...grantsList];

    if (grantFilterQuery.search) {
      filterData = filterData.filter((e) =>
        e.name.toLowerCase().includes(grantFilterQuery.search)
      );
    }

    if (grantFilterQuery.matchPools && grantFilterQuery.matchPools.length) {
      const filterMatchPools = grantFilterQuery.matchPools.map(
        (x) => x.userInput
      );
      filterData = filterData.filter((e) =>
        filterMatchPools.includes(`Match Pool ${e.matchPool}`)
      );
    }
    if (grantFilterQuery.sort && grantFilterQuery.sort.length) {
      const sortKey = grantFilterQuery.sort
        .map((x) => x.userInput)
        .map((x) => {
          if (x === 'New') {
            return 'createdAt';
          } else if (x === 'Close to funding') {
            return '-currentAmount';
          } else if (x === 'Recently updated') {
            return 'updatedAt';
          }
        });
      filterData.sort(fieldSorter(sortKey));
    }

    setGrantsCopy(filterData);
  }, [grantFilterQuery, grantsList]);

  return (
    <Container className="px-5 pb-5">
      {!grantId && (
        <Row>
          <span className="fs-2 text-black p-0">All Grants</span>
        </Row>
      )}

      {grantsCopy.map((e, i) => {
        const currentCart = cart?.find((element) => element.id === e._id);
        return (
          <Row
            style={{ position: 'relative', left: grantId ? '12px' : null }}
            key={i}
            className="grant-list-container p-3 mb-4 pointer"
          >
            <Col>
              <Row
                onClick={() => {
                  setGrantId(e._id);
                }}
              >
                <Col xs={6} sm={3} xxl={2} className="align-self-center">
                  <img
                    className="img-fluid grant-list-logo"
                    src={GrantImage(e)}
                    alt="project logo"
                  />
                </Col>
                {/* Only shows on small screens */}
                <Col xs={6} className="d-block d-sm-none">
                  <Stack gap={1} className="float-end">
                    <p className="grants-text-grey m-0">Currently Raised</p>
                    <h5 className="raised-price-text-color bold">
                      {formatGrantCurrentlyRaised(e)}
                    </h5>
                  </Stack>
                </Col>
                {/* End only shows on small screens */}
                <Col xs={12} md={6} xxl={3}>
                  <div className="grants-title-text-color bold mb-0">
                    {e.name}
                  </div>

                  <p className="grants-list-author">
                    {e.candidateId?.fullName}
                  </p>
                  <div className="grants-list-stats">
                    <p className="grey-title mb-1 ">
                      <img src={GrantFlag} alt="flag-icon" />
                      Goal:
                      <strong className="grant-list-span text-black">
                        {`${formatPrefix(e)} ${e.fundraisingAmount}`}
                      </strong>
                      <span className="featured-card-currency">
                        {' '}
                        {formatTrailingCurrency(e)}
                      </span>
                    </p>
                    <p className="grey-title mb-0">
                      <img src={GrantClock} alt="clock-icon" /> Last Updated:
                      <strong className="grant-list-span text-black">
                        {' '}
                        {timeAgo(e.updatedAt)}
                      </strong>
                    </p>
                  </div>
                </Col>
                {/* Only shows on XXL >= 1440 screens */}
                <Col
                  xxl={5}
                  className="text-center align-self-center d-none d-xxl-block"
                >
                  <p className="grants-text-grey">{e.description}</p>
                </Col>
                {/* End only shows XXL screens */}
                <Col sm={3} xxl={2} className="d-none d-sm-block">
                  <Stack gap={1} className="text-end float-end">
                    <p className="grants-text-grey m-0">Currently Raised</p>
                    <h3 className="raised-price-text-color bold">
                      {formatGrantCurrentlyRaised(e)}
                    </h3>
                  </Stack>
                </Col>
                {/* Only shows on < XL screens */}
                <Col
                  xs={12}
                  className="text-center align-self-center d-block d-xs-none d-xxl-none"
                >
                  <p className="grants-text-grey">{e.description}</p>
                </Col>
                {/* End only show < XL screens */}
              </Row>
              <Row>
                <Col>
                  <button
                    style={{
                      cursor: currentCart ? 'auto' : 'pointer',
                    }}
                    onClick={() => {
                      addItem(e);
                    }}
                    className="grants-add-to-cart-btn bold float-end"
                  >
                    {currentCart ? 'In Cart' : 'Add To Cart'}
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
      {grantsCopy.length === 0 && (
        <h3 className="mt-2 fs-3 grey-title">No grants were found...</h3>
      )}
    </Container>
  );
}

export default GrantsList;
