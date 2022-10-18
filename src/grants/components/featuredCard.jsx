import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/featuredCard.css';
import '../../shared/css/typography.css';
import Flag from '../../assets/icon/snapbrillia_checkered_flag_icon.svg';
import Clock from '../../assets/icon/snapbrillia_clock_icon.svg';
import Stack from 'react-bootstrap/Stack';
import { timeAgo } from '../../shared/utils.js';
import { IntroGrantsContext } from '../introGrants';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import {
  formatGrantCurrentlyRaised,
  formatTrailingCurrency,
  formatPrefix,
} from '../../shared/utils';

const FeaturedCard = ({ item }) => {
  const { cart, addItem } = useCart();
  const { setGrantId } = useContext(IntroGrantsContext);
  const currentCart = cart?.find((element) => element.id === item._id);
  return (
    <Col
      className="featured-card-container p-3 bold pointer"
      onClick={() => {
        setGrantId(item._id);
      }}
    >
      <Row className="mb-3">
        <Col xs={6} sm={3} md={3} xl={3}>
          <img
            className="img-fluid rounded featured-card-picture"
            src={GrantImage(item)}
            alt="..."
          />
        </Col>
        {/* Only shows for small screens */}
        <Col xs={6} className="d-block d-sm-none">
          <Stack gap={1} className="text-end float-end">
            <p className="m-0 ps-1 featured-card-gray">Currently Raised</p>
            <h4 className="featured-card-pink bold">
              {formatGrantCurrentlyRaised(item)}
            </h4>
          </Stack>
        </Col>
        {/* End only show for small screens  */}
        <Col xs={12} md={5} className="p-sm-0">
          <h5
            className="m-0 bold featured-card-blue"
            onClick={() => {
              setGrantId(item._id);
            }}
          >
            {`${item.name}`}
          </h5>
          <p className="mb-3 featured-card-gray pointer">{`${item.candidateId?.fullName}`}</p>
        </Col>
        <Col sm={3} md={4} xl={4} className="d-none d-sm-block">
          <Stack gap={1} className="text-end float-end">
            <p className="m-0 ps-1 featured-card-gray">Currently Raised</p>
            <h3 className="featured-card-pink bold">
              {formatGrantCurrentlyRaised(item)}
            </h3>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <Stack gap={1}>
            <span className="featured-card-gray">
              <img src={Flag} alt="flag-icon" /> Goal:{' '}
              <span className="text-black bold">{formatPrefix(item)}</span>
              <span>
                {`${item.fundraisingAmount} ${formatTrailingCurrency(item)}`}
              </span>
            </span>
            <span className="featured-card-gray">
              <img src={Clock} alt="clock-icon" width={15} height={14} /> Last
              Updated:
              <span className="text-black bold">{timeAgo(item.updatedAt)}</span>
            </span>
          </Stack>
        </Col>
        <Col>
          <div className="featured-card-button-div">
            <button
              style={{
                cursor: currentCart ? 'auto' : 'pointer',
              }}
              onClick={() => {
                addItem(item);
              }}
              className="grants-add-to-cart-btn bold float-end"
            >
              {currentCart ? 'In Cart' : 'Add To Cart'}
            </button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default FeaturedCard;
