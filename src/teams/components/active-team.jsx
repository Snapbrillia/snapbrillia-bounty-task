import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Col, Container, Row, Badge } from 'react-bootstrap';

import '../../shared/css/buttonStyles.css';
import '../css/activeTeam.css';
import { navigate } from '@reach/router';
import { UserImage } from '../../shared/images';

// need to use teamsSummary style to the component
function capitolize(string = '') {
  const str = string.substring(1);
  return string[0]?.toUpperCase() + str;
}

const ActiveTeam = ({ team, assessment, user }) => {

  return (
    <Container className="active_team_main_container" fluid>
      <Col className="active_team_bg">
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Row className="active_team_subtitle_bounty">
              <p>
                Bounty:{' '}
                <span className="active_team_improve_span">
                  {team.bountyId?.name}
                </span>
              </p>
            </Row>
            <Row className="active_team_subtitle_bounty_status">
              <p>
                Bounty Status:{' '}
                <span className="active_team_bold_span">{`${capitolize(
                  team.status
                )} - ${capitolize(assessment.position)}`}</span>
              </p>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Row className="active_team_subtitle_bounty_reward">
              <p>
                Bounty Reward:{' '}
                <span className="active_team_bold_span">
                  $
                  {parseInt(team.bountyId?.rewardAmount).toLocaleString(
                    'en-US'
                  )}{' '}
                  USD
                </span>
              </p>
            </Row>
            <Row className="active_team_subtitle_team_commits">
              {/*<p>
                Team Commits: <span className="active_team_bold_span">1-6</span>
                  </p>*/}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={8}>
            <Row>
              <Col md={2} className="active_team_profile">
                <img
                  src={UserImage(team.mentor)}
                  alt="profile"
                  height={90}
                  width={90}
                  className="active_team_profile_img"
                />
              </Col>
              <Col md={3}>
                <Row>
                  <p className="active_team_content_name">
                    {team.mentor?.fullName}
                  </p>
                </Row>
                <Row>
                  <p className="active_team_content_discord">Discord</p>
                </Row>
                <Row>
                  <p className="active_team_content_discord_content">
                    {user?.discord}
                  </p>
                </Row>
              </Col>
              <Col md={3}>
                {/*<Row>
                  <p className="active_team_content_experience_level">
                    Experience level
                  </p>
                </Row>
                <Row>
                  <p className="active_team_content_experience_level_content">
                    1-3 years
                  </p>
                </Row>*/}
                <Row>
                  <p className="active_team_content_github_url_v1">Github URL</p>
                </Row>
                <Row>
                  <p className="active_team_content_github_url_content">
                  {user?.github}
                  </p>
                </Row>
                <Row>
                  <p className="active_team_content_linkedin_url_v1">
                    LinkedIn URL
                  </p>
                </Row>
                <Row>
                  <p className="active_team_content_linkedin_url_content">
                  {user?.linkedin}
                  </p>
                </Row>
              </Col>
              <Col md={4}>
                <div className="active_team_content_languages">Skills</div>
                {team.bountyId?.skills?.length > 0 && team.bountyId?.skills.map((x) => (
                    <Badge pill className="active_team_language_pills">
                      {x}
                    </Badge>
                  ))}
                {/*<Row>
                  <p className="active_team_content_github_url"></p>
                </Row>
                <Row>
                  <p className="active_team_content_github_url_content">
                    {}
                  </p>
                </Row>
                <Row>
                  <p className="active_team_content_github_url">Github URL</p>
                </Row>
                <Row>
                  <p className="active_team_content_github_url_content">
                    {team.mentor?.github}
                  </p>
                </Row>*/}
              </Col>
            </Row>
            <Row>
              {/* <p className="active_team_content_description active_team_content_discord_add_rem">
                {team.bountyId?.taskDescription}
              </p> */}
              <Col>
                <div
                  dangerouslySetInnerHTML={{
                    __html: team.bountyId?.taskDescription,
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4}>
            <Row>
              <Col
                md={{ span: 6, offset: 6 }}
                className="active_team_subtitle_team_commits"
              >
                <p className="active_team_content_current_team">
                  Current Team ({team.mentees?.length})
                </p>
              </Col>
            </Row>
            <Row>
              <Col
                md={{ span: 6, offset: 6 }}
                className="active_team_mentees_container"
              >
                <Row>
                  {team.mentees?.length > 0 &&
                    team.mentees.map((mentee, idx) => {
                      return (
                        <Col key={idx} xs={4} className="active_team_mentee">
                          <img
                            src={UserImage(mentee)}
                            height={40}
                            width={40}
                            alt={mentee.fullName}
                            className="active_team_profile_img"
                          />
                          <p className="active_team_content_current_team_name">
                            {mentee.fullName}
                          </p>
                        </Col>
                      );
                    })}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="active_team_button_go_to_team_page col-md-12 active_team_launch_btn ml-5"
                  onClick={() => navigate(`/teams/${team._id}`)}
                >
                  <p
                    style={{ paddingTop: '8px' }}
                    className="active_team_button_go_to_team_page_text"
                  >
                    Go To Work Page
                  </p>
                </button>
                {!team.bountyId.useGithubApp && assessment?._id && (
                   <Link
                    className="active_team_button_launch_IDE"
                    as={Link}
                    to={`/bounties/${team.bountyId?._id}/eeo-form`}
                    >
                    Submit Work
                  </Link>
                )}
                {team.bountyId.useGithubApp && (
                  <Link
                    className="active_team_button_launch_IDE"
                    as={Link}
                    to={`/bounties/${team.bountyId?._id}/eeo-form`}
                  >
                    Launch IDE
                  </Link>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ActiveTeam;
