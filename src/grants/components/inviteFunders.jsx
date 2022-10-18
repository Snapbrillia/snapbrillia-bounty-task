import React, { useContext, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../css/inviteFunders.css';
import 'bootstrap/dist/css/bootstrap.css';
import Close from '../../assets/icon/snapbrillia_close_icon.svg';
import { GrantSetupContext } from './grantSetup';

const InviteFunders = () => {
  const { funders, setFunders } = useContext(GrantSetupContext);
  return (
    <Container className="invite-funders-container" fluid>
      <Row className="invite-funders-title">
        <div>Invite Funders</div>
      </Row>
      {funders.map((funder, index) => (
        <Fragment key={index}>
          <Row className="invite-funders-row1 d-flex justify-content-between">
            <div htmlFor="name" className="grant-setup-tag">
              Funder&apos;s Name
            </div>
            {index !== 0 && (
              <div
                onClick={() => {
                  setFunders([...funders].filter((e, i) => i !== index));
                }}
                className="grant-setup-close-icon"
              >
                <img src={Close} alt="close-icon" />
              </div>
            )}
            <div className="input-group">
              <input
                value={funders[index].fullName}
                onChange={(e) => {
                  let copy = [...funders];
                  copy[index].fullName = e.target.value;
                  if (e.target.value === '') delete copy[index].fullName;
                  setFunders(copy);
                }}
                type="text"
                className="form-control invite-funders-control"
              />
            </div>
          </Row>
          <Row className="invite-funders-row2">
            <label htmlFor="name" className="grant-setup-tag">
              Funder&apos;s Email
            </label>
            <div className="input-group">
              <input
                value={funders[index].email}
                onChange={(e) => {
                  let copy = [...funders];
                  copy[index].email = e.target.value;
                  if (e.target.value === '') delete copy[index].email;
                  setFunders(copy);
                }}
                type="text"
                className="form-control invite-funders-control"
              />
            </div>
          </Row>
        </Fragment>
      ))}
      <Row className="d-flex justify-content-end">
        <div
          className="invite-funders-add"
          onClick={() => setFunders([...funders, {}])}
        >
          Add Another Funder
        </div>
      </Row>
    </Container>
  );
};

export default InviteFunders;
