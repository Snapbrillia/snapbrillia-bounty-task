import React, { useContext, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../css/inviteTeamMembers.css';
import 'bootstrap/dist/css/bootstrap.css';
import Close from '../../assets/icon/snapbrillia_close_icon.svg';
import { GrantSetupContext } from './grantSetup';

const InviteTeamMembers = () => {
  const { teamMember, setTeamMember, throttle, setThrottle, throttleSetter } =
    useContext(GrantSetupContext);

  return (
    <Container className="invite-team-members" fluid>
      <Row className="invite-team-members-title">
        <div>Invite Team Members</div>
      </Row>
      {teamMember.map((member, index) => (
        <Fragment key={index}>
          <Row className="invite-funders-row1 d-flex justify-content-between">
            <div htmlFor="name" className="grant-setup-tag">
              Team Member&apos;s Name
            </div>
            {index !== 0 && (
              <div
                onClick={() => {
                  setTeamMember([...teamMember].filter((e, i) => i !== index));
                }}
                className="grant-setup-close-icon"
              >
                <img src={Close} alt="close-icon" />
              </div>
            )}
            <div className="input-group">
              <input
                value={teamMember[index].fullName}
                onChange={(e) => {
                  let copy = [...teamMember];
                  copy[index].fullName = e.target.value;
                  if (e.target.value === '') delete copy[index].fullName;
                  setTeamMember(copy);
                }}
                type="text"
                className="form-control invite-team-members-control"
              />
            </div>
          </Row>
          <Row className="invite-team-members-row2">
            <label htmlFor="name" className="grant-setup-tag">
              Team Member&apos;s Email
            </label>
            <div className="input-group">
              <input
                value={teamMember[index].email}
                onChange={(e) => {
                  let copy = [...teamMember];
                  copy[index].email = e.target.value;
                  if (e.target.value === '') delete copy[index].email;
                  setTeamMember(copy);
                }}
                type="text"
                className="form-control invite-team-members-control"
              />
            </div>
          </Row>
        </Fragment>
      ))}
      <Row className="d-flex justify-content-end">
        <div
          className="invite-team-members-add"
          onClick={() => {
            // setThrottle([0, 0, 0, 0]);
            setTeamMember([...teamMember, {}]);
          }}
        >
          Add Another Team Member
        </div>
      </Row>
    </Container>
  );
};

export default InviteTeamMembers;
