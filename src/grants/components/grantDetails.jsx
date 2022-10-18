import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GrantSetupContext } from './grantSetup';

import '../css/grantDetails.css';
import 'bootstrap/dist/css/bootstrap.css';
import Expand from '../../assets/icon/snapbrillia_description_drag.svg';

const GrantDetails = () => {
  const { data, setData, throttle } = useContext(GrantSetupContext);
  return (
    <Container className="grant-details-component" fluid>
      <Row className="grant-details-title">
        <div>Grant Details and Funding</div>
      </Row>
      <Row className="grant-details-component-row1">
        <Col md={12} xs={12}>
          <label htmlFor="name" className="grant-setup-tag">
            Description*
          </label>
          <div className="input-group">
            <textarea
              style={{
                border:
                  throttle[1] === 1 && data.description === ''
                    ? '2px solid #b33a3a'
                    : 'none',
              }}
              value={data.description}
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              className="col-md-12 grant-details-textarea"
              rows="8"
            />
            <div className="grant-details-expand-icon">
              <img src={Expand} alt="expand-icon" />
            </div>
          </div>
          {throttle[1] === 1 && data.description === '' ? (
            <Row className="grant-warning-text mx-1">
              Description is required for the created grant.
            </Row>
          ) : null}
        </Col>
      </Row>
      <Row className="grant-details-component-row2 gx-xs-2 gx-md-5">
        <Col md={6} xs={12}>
          <label htmlFor="name" className="grant-setup-tag">
            Select Matchpool
          </label>
          <div className="input-group">
            <select
              style={{
                border:
                  throttle[1] === 1 && data.matchPool === ''
                    ? '2px solid #b33a3a'
                    : 'none',
              }}
              value={data.matchPool}
              onChange={(e) => {
                setData({ ...data, matchPool: e.target.value });
              }}
              className="form-select grant-details-control"
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          {throttle[1] === 1 && data.matchPool === '' ? (
            <Row className="grant-warning-text mx-1">
              Match Pool is required for the created grant.
            </Row>
          ) : null}
        </Col>

        <Col md={4} xs={12}>
          <label htmlFor="name" className="grant-setup-tag">
            Grant Amount*
          </label>
          <div className="input-group">
            <input
              dir="rtl"
              style={{
                border:
                  throttle[1] === 1 && data.fundraisingAmount === 0
                    ? '2px solid #b33a3a'
                    : 'none',
              }}
              value={data.fundraisingAmount.toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
              })}
              placeholder="0"
              onChange={(e) => {
                setData({
                  ...data,
                  fundraisingAmount:
                    e.target.value === ''
                      ? 0
                      : parseFloat(e.target.value.replace(/,/g, '')),
                });
              }}
              type="string"
              className="grant-details-grant-amount form-control grant-details-control"
            />
            {data.payment.pubKeyAddress.length > 0 ? (
              <>
                <span className="input-number-suffix-usd">₳DA</span>
              </>
            ) : (
              <>
                <span className="input-number-prefix">$</span>
                <span className="input-number-suffix-usd">USD</span>
              </>
            )}
          </div>
          {throttle[1] === 1 && data.fundraisingAmount === 0 ? (
            <Row className="grant-warning-text mx-1">
              Grant Amount must be greater than 0.
            </Row>
          ) : null}
        </Col>

        <Col md={2} xs={12}>
          <label htmlFor="name" className="grant-setup-tag">
            Award to Bounties
          </label>
          <div className="input-group mb-5">
            <input type="text" className="form-control grant-details-control" />
            <span className="input-number-suffix-percent">%</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GrantDetails;
