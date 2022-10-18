import * as bountyApi from '../../api/bounty';
import { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import formatCurrency from '../../shared/utils';
//COMPONENTS
import { Container, Row, Col } from 'react-bootstrap';

//Icons
import TeamIcon from '../../assets/icon/snapbrillia_teams_icon.svg';
import MentorIcon from '../../assets/icon/snapbrillia_mentor_icon.png';

//CSS
import '../../shared/css/typography.css';
import '../../shared/css/textColors.css';
import './css/allBounties.css';
import '../css/improveToolTip.css';
import { BountyImage } from '../../shared/images';

export default function AllBounties({ bountiesFilters }) {
  const [bounties, setBounties] = useState([]);
  const [filteredBounties, setFilteredBounties] = useState([]);

  // API call to GET /api/boutnies
  const getAllBounties = async () => {
    try {
      const { docs } = await bountyApi.getAllBounty();
      if (docs) {
        setBounties(docs);
        setFilteredBounties(docs);
      }
    } catch (error) {}
  };

  //scroll to top function
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    getAllBounties();
  }, []);

  useEffect(() => {
    // console.log(bountiesFilters.search)
    let filteredData = [...bounties];
    for (let key in bountiesFilters) {
      
      if (key === 'search' && bountiesFilters.search) {
        filteredData = filteredData.filter((bounti) =>
          bounti.name.toLowerCase().includes(bountiesFilters.search)
        );
      }

      if (key === 'permissionLess' && bountiesFilters.permissionLess !== null) {
        filteredData = filteredData.filter(
          (bounti) => bounti.permissionLess === bountiesFilters.permissionLess
        );
      }

      if (key === 'status' && bountiesFilters.status !== null) {
        filteredData = filteredData.filter(
          (bounti) => bounti.status === bountiesFilters.status
        );
      }
      

      // if (key === 'teamsOnly' && bountiesFilters.teamsOnly) {
        // filteredData = filteredData.filter((bounti) => bounti.teamPreference);
      // }
      
      if (key === 'teamPreference' && bountiesFilters.teamPreference !== null) {
        filteredData = filteredData.filter(
          (bounti) => bounti.teamPreference === bountiesFilters.teamPreference
          )
      }

      if (key === 'mentorAvailable' && bountiesFilters.mentorAvailable) {
        filteredData = filteredData.filter((bounti) => bounti.teamIds.length);
      }

      if (key === 'mentorNeeded' && bountiesFilters.mentorNeeded) {
        filteredData = filteredData.filter((bounti) => bounti.teamIds.length);
      }

      if (key === 'skills' && bountiesFilters.skills.length) {
        const listFilteredLanguages = bountiesFilters.skills.map(
          (y) => y.value
        );
        filteredData = filteredData.filter((bounti) => {
          return (
            bounti.skills &&
            bounti.skills.filter((x) =>
              listFilteredLanguages.includes(x)
            ).length
          );
        });
      } else if (bountiesFilters[key] && bountiesFilters[key].length && key !== 'search') {
        filteredData = filteredData.filter((bounti) => {
          return bountiesFilters[key].includes(bounti[key]);
        });
      }
    } console.log(bountiesFilters.skills)
    console.log(bountiesFilters)
    setFilteredBounties(filteredData);
  }, [bounties, bountiesFilters]);
  function sortBounties(sortChoice) {
    switch (sortChoice) {
      case 'new':
        setFilteredBounties(
          [...filteredBounties].sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          )
        );
        break;
      case 'old':
        setFilteredBounties(
          [...filteredBounties].sort(
            (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
          )
        );
        break;
      case 'high':
        setFilteredBounties(
          [...filteredBounties].sort((a, b) => b.rewardAmount - a.rewardAmount)
        );
        break;
      case 'low':
        setFilteredBounties(
          [...filteredBounties].sort((a, b) => a.rewardAmount - b.rewardAmount)
        );
        break;
    }
  }

  return (
    <Container className="px-5 pb-5">
      <Row className="mb-2">
        <Col className="ps-0 d-flex align-items-end">
          <span className="fs-2 text-black p-0mb-1">All Gigs</span>
        </Col>
        <Col sm={3} className="bounties-sortby-dropDown pe-0">
          <label>Sort By:</label>{' '}
          <select
            className="bg-light"
            onChange={(e) => {
              sortBounties(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="new">New</option>
            <option value="old">Old</option>
            <option value="high">High-value</option>
            <option value="low">Low-value</option>
          </select>
        </Col>
      </Row>
      {filteredBounties.map((item, index) => {
        let skills = item.skills;
        if (typeof languages === 'object') {
          skills = Object.keys(skills);
        } else if (typeof skills === 'string') {
          skills = [skills];
        }
        return (
          <Row
            key={index}
            className="bounties-bg-color rounded-3 p-3 mt-2 mb-4 bold pointer"
            onClick={() => {
              navigate(`/bounties/${item._id}`);
              topFunction();
            }}
            //ty-link-text-color bold pointer"
            id={`${item._id}`}
          >
            <Col sm={9} className="pe-0">
              <Row className="mb-4">
                <Col>
                  <h5 className="primary semi-bold d-inline my-0 me-2">
                    {item.name}
                  </h5>
                  <>
                    {' '}
                    {/* Mentor and Teams Icons need to be dynamically rendered. */}
                    {item.teamIds.length > 0 && (
                      <span className="brand-primary teams-mentor-fs medium mx-2 d-inline-flex align-items-center align-middle">
                        <img
                          src={MentorIcon}
                          alt="mentor-icon"
                          width={14}
                          height={14}
                          className="fill-svg-path mx-1"
                        />
                        Mentors Available
                      </span>
                    )}
                    {item.teamPreference && (
                      <span className="brand-primary teams-mentor-fs medium mx-2 d-inline-flex align-items-center align-middle">
                        <img
                          src={TeamIcon}
                          alt="team-icon"
                          width={20}
                          height={20}
                          className="fill-svg-path mx-1"
                        />
                        Teams Only
                      </span>
                    )}
                  </>
                </Col>
              </Row>
              <Row>
                <Col className="text-center text-sm-start">
                  <img
                    src={BountyImage(item)}
                    className="company-logo"
                    alt="company logo"
                  />
                  <span className="bounites-light-grey-text-color">
                    {item.companyId?.companyName}
                  </span>
                </Col>
                <Col sm={8} className="d-inline-flex align-items-center">
                  <Row className="w-100">
                    <Col className="text-center">
                      <span
                        className={`tool-tip-difficulty ${
                          item.permission || 'acceptAll'
                        }`}
                      >
                        {/*item.difficulty || 'Difficulty'*/}
                        {item.permissionLess ? "Accept All" : "Applications"}
                      </span>
                      <span className="float-end">|</span>
                    </Col>
                    <Col className="text-center">
                      <span>
                        {`${item.timeEstimation} ${item.timeEstimationType}`}
                      </span>
                      <span className="float-end">|</span>
                    </Col>
                    {skills?.length > 0 && (
                      <Col className="text-center medium">
                        <span className="position-relative">
                          <span className="position-absolute top-50 end-100 translate-middle p-1 bg-warning border border-light bounties-badge-triangle"></span>
                          <span className="main-language">{`${skills[0]} `}</span>
                        </span>
                        <span className="float-end">|</span>
                      </Col>
                    )}
                    <Col className="text-center">
                      <span
                        // onClick={() => navigate(`/bounties/${item._id}`)}
                        className="bounties-view-bounty-link-text-color bold pointer"
                        // id={`${item._id}`}
                      >
                        View Gig
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={3} className="text-center text-sm-end">
              <span className="bounites-light-grey-text-color">Gig Reward</span>
              <h4 className="dark-purple bold mb-0">{formatCurrency(item)}</h4>
            </Col>
          </Row>
        );
      })}
      {filteredBounties.length === 0 && (
        <h3 className="fs-5 grey-title medium mt-4">No gigs were found...</h3>
      )}
    </Container>
  );
}
