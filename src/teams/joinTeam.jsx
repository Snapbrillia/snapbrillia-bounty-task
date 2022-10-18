import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../shared/menus/navBar';
// import AllBounties from '../bounties/components/allBounties';
// import FeaturedBounties from '../bounties/components/featuredBounties';
// import BountySideMenu from '../shared/menus/bountySideMenu';
import JoinTeamIntro from './components/joinTeamIntro';
import SearchFilter from './components/searchFilter';
import SelectATeam from './components/selectATeam';
import '../shared/css/typography.css';
import '../shared/css/sharedStyles.css';
import '../shared/css/buttonStyles.css';
import { useParams } from "@reach/router"
import { useBounty } from '../hooks/useBounty';
import * as teamApi from '../api/teams';
import { toast } from 'react-toastify';

export default function JoinTeam() {
  const { id } = useParams();
  const {bounty, assessment} = useBounty(id);
  const [teamFilter, setTeamFilter] = useState({
    search: '',
    rating: 0,
    linkedin: '',
    discord: '',
    officeHours: '',
  })

  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  const loadTeams = async () => {
    try {
      const teams = await teamApi.getAllTeams({
        bountyId: id,
        status: 'pending',
      });
      setTeams(teams);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    loadTeams();
  }, []);

  useEffect(() => {
    let filteredData = [...teams];
    for (let key in teamFilter) {
      if (key === 'search' && teamFilter.search) {
        filteredData = filteredData.filter(team => team.mentor && team.mentor.fullName.includes(teamFilter.search));
      } else if (teamFilter[key]) {
        filteredData = filteredData.filter(team => team[key]);
      }
    }
    setFilteredTeams(filteredData);
  }, [teams, teamFilter])

  return (
    <>
      <NavBar />
      <Container fluid className="px-5 pb-5">
        <Row>
          <JoinTeamIntro bounty={bounty} />
        </Row>
        <Row>
          <Col lg={2} className="p-0">
            <SearchFilter teamFilter={teamFilter} setTeamFilter={setTeamFilter}/>
          </Col>
          <Col lg={10}>
            <Row>
              <SelectATeam teams={filteredTeams} assessment={assessment}/>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
