import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImproveToolTip from '../../bounties/components/improveToolTip';
import NavBar from '../../shared/menus/navBar';
import TeamTabs from './teamTabs';
import { navigate } from '@reach/router';
import { useParams } from '@reach/router';
import * as teamApi from '../../api/teams';
import * as bountyAPI from '../../api/bounty';
import BackIcon from '../../assets/icon/snapbrillia_softwareengineerback_icon.png';

function TeamPage() {
  const { id } = useParams();
  const [team, setTeam] = useState({
    bountyId: {},
  });

  const [assessment, setAssessment] = useState({});

  const loadTeamInfo = async () => {
    try {
      const teamInfo = await teamApi.getOneTeam(id);
      const assessment = await bountyAPI.getMyAssessment(teamInfo.bountyId._id);
      setAssessment(assessment);
      setTeam(teamInfo);
    } catch (err) {}
  };

  useEffect(() => {
    loadTeamInfo();
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row className="mb-3">
          <Col xs={12} lg={12}>
            <span className="pointer link" onClick={() => navigate('/teams')}>
              <img
                src={BackIcon}
                alt="back-icon"
                className="mb-1 me-1"
                width={10}
              />
              <span className="primary ms-1">Back to Work</span>
            </span>
          </Col>
        </Row>
        <Row>
          <ImproveToolTip bounty={team.bountyId} assessment={assessment} team={team}/>
        </Row>
        <Row className="mt-5">
          <TeamTabs team={team}/>
        </Row>
      </Container>
    </>
  );
}

export default TeamPage;
