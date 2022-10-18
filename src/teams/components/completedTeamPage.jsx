import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CompletedTeamDetails from './completedteamsdetails';
import NavBar from '../../shared/menus/navBar';
import CompletedTeamTab from './completedTeamTab';
import { navigate } from '@reach/router';
import { useParams } from '@reach/router';
import * as teamApi from '../../api/teams';
import BackIcon from '../../assets/icon/snapbrillia_softwareengineerback_icon.png';

function TeamPage() {

  const { id } = useParams();
  const [team, setTeam] = useState({
    bountyId: {},
  });

  const loadTeamInfo = async () => {
    try {
      const teamInfo = await teamApi.getOneTeam(id);
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
              <img src={BackIcon} alt="back-icon" className="mb-1" />
              <span className="primary ms-1">Back to Teams</span>
            </span>
          </Col>
        </Row>
        <Row>
          <CompletedTeamDetails bounty={team.bountyId}/>
        </Row>
        <Row className="mt-5">
          <CompletedTeamTab team={team}/>
        </Row>
      </Container>
    </>
  );
}

export default TeamPage;
