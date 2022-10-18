import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import FeaturedCard from './featuredCard';
import '../../shared/css/typography.css';
import '../css/featured.css';
import * as grantAPI from '../../api/grant';
import { toast } from 'react-toastify';

const Featured = ({ featuredData }) => {
  return (
    <Container className="px-5 pb-5 pt-3">
      <Row>
        <span className="fs-2 text-black mb-2 p-0">Featured Grants</span>
      </Row>
      <Row className="gap-3 featured-show-row-md-screen">
        {featuredData.map((item, idx) => (
          <FeaturedCard key={idx} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Featured;
