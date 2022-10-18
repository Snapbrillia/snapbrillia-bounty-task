import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import TeamsHeader from './components/teamsHeader';
import ActiveTeam from './components/active-team';
import ActiveIndividual from './components/active-individual';
import NoTeam from './components/noTeam';
import NavBar from '../shared/menus/navBar';
import CompletedTeamComponent from './components/CompletedTeam';
import CompletedIndividualComponent from './components/completedIndividual';
import { useState, useEffect } from 'react';
import * as teamAPI from '../api/teams';
import * as bountyAPI from '../api/bounty';
import { useAuth } from '../context/authContext';

const Teams = () => {
  const [individualAssessments, setIndividualAssessments] = useState([]);
  const [activeTeams, setActiveTeams] = useState([]);
  const [completedTeams, setCompletedTeams] = useState([]);
  const [completedIndividuals, setCompletedIndividuals] = useState([]);
  const { auth } = useAuth();

  const getAllAssessments = async () => {
    try {
      const list = [];
      const listCompleted = [];
      const data = await bountyAPI.getAllMyAssessments({});
      const completedData = await bountyAPI.getAllMyAssessments({status: 'completed'});
      for (const item in data) {
        const assessment = data[item];
        const bounty = await bountyAPI.getBounty(assessment.bountyId);
        list.push({assessment, bounty});
      }
      for (const item in completedData) {
        const assessment = completedData[item];
        const bounty = await bountyAPI.getBounty(assessment.bountyId);
        listCompleted.push({assessment, bounty});
      }
      setIndividualAssessments(list);
      setCompletedIndividuals(listCompleted);
    } catch (error) {}
  }

  const getMyTeams = async () => {
    try {
      const list = [];
      const data = await teamAPI.getMyTeams();
      const completedData = await teamAPI.getMyTeams({
        status: 'completed',
      });
      for (const item in data) {
        const team_data = data[item];
        if (team_data.bountyId?._id) {
          const assessment_data = await bountyAPI.getMyAssessment(team_data.bountyId._id);
          list.push({team_data, assessment_data});
        }
      }
      setActiveTeams(list);
      setCompletedTeams(completedData);
    } catch (err) {}
  }

  useEffect(() => {
    getMyTeams();
    getAllAssessments();
  }, [])

  return (
    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <TeamsHeader />
      </Row>
      {(activeTeams.length === 0 && individualAssessments.length === 0) && (
        <NoTeam />
      )}
      {(activeTeams.length > 0 || individualAssessments.length > 0) && (
        <Row>
          <p className="active_team_title ps-5">Your Active Work</p>
          {activeTeams.map((team, idx) => (
            <ActiveTeam key={idx} team={team.team_data} assessment={team.assessment_data} user={auth.user} />
          ))}
          {individualAssessments.map(({assessment, bounty}, idx) => (
            <ActiveIndividual key={idx} assessment={assessment} bounty={bounty} user={auth.user} />
          ))}
        </Row>
      )}
      {completedTeams.length > 0 && (
        <Row>
          <h1 className="big-header ps-5">Completed Teams</h1>
          <Container className="active_team_main_container" fluid>
            <Row>
              {completedTeams.map((team, idx) => (
                <Col key={idx} md={4} className="mb-4">
                  <CompletedTeamComponent team={team} />
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      )}
       {completedIndividuals.length > 0 && (
        <Row>
          <h1 className="big-header ps-5">Completed Individuals</h1>
          <Container className="active_team_main_container" fluid>
            <Row>
              {completedIndividuals.map(({bounty, assessment}, idx) => (
                <Col key={idx} md={4} className="mb-4">
                  <CompletedIndividualComponent bounty={bounty} assessment={assessment}/>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      )}
    </Container>
  );
};

export default Teams;
