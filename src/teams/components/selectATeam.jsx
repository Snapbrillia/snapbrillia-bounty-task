import { Row, Col, Container } from 'react-bootstrap';
import OnChainIcon from '../../assets/icon/snapbrillia_on_chain_icon.png';
import ResumeIcon from '../../assets/icon/snapbrillia_resume_icon.svg';
import StarPicker from 'react-star-picker';
import GitHubIcon from '../../assets/icon/snapbrillia_github_actual_icon.png';
import '../css/selectATeam.css';
import '../../shared/css/textColors.css';
import '../../shared/css/typography.css';
import * as bountyApi from '../../api/bounty';
import { useParams } from '@reach/router';
import { toast } from 'react-toastify';
import { navigate } from '@reach/router';
import { UserImage } from '../../shared/images';
import { snapbrilliaFile } from '../../api/files';

export default function SelectATeam({ teams, assessment }) {
  const { id } = useParams();

  const expressInterest = async (teamId) => {
    try {
      await bountyApi.expressInterest(id, {
        teamId,
        position: 'mentee',
      });
      toast('Join team successfully');
      navigate('/teams');
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <p className="select_a_team_title bg-white">Select a team</p>
        </Row>
      </Container>
      {teams.length > 0 &&
        teams.map((team) => {
          return (
            <Container className="select-a-team-container my-3" key={team._id}>
              <Row>
                <Col
                  xs="12"
                  lg="3"
                  className="mentor-conf-modal-border-radius-1 bg-white p-2 m-2"
                >
                  <div className="mentor-conf-modal-height-100 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <img
                          className="w-25 rounded-circle me-1"
                          src={UserImage(team.mentor)}
                          alt="..."
                        />
                        <div className="d-flex flex-column px-2 pb-5">
                          <span className="mentor-conf-modal-username-text primary bold">
                            {team.mentor?.fullName}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-1">
                        {/* <StarPicker
                          className="mentor-conf-modal-cursor-default"
                          size={25}
                          value={4.5}
                          halfStars
                          disabled
                        />
                        <span className="mentor-conf-modal-rating-text-fs fst-italic small-text ps-4">
                          120 reviews
                        </span> */}
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <img src={ResumeIcon} alt="resume-icon" />
                      <a
                        className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap me-2"
                        href={snapbrilliaFile(team.mentor?.resume)}
                        download="resume"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                      <img src={OnChainIcon} alt="onchain-icon" width="16" />
                      <input
                        className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap"
                        type="button"
                        value="On-Chain Reputation"
                      />
                    </div>
                  </div>
                </Col>
                <Col xs="12" lg="6" className="p-2 m-2">
                  <Row className="my-3">
                    <Col>
                      <Row>
                        <p className="grey-title mb-0">Completed bounties</p>
                      </Row>
                      <Row>
                        <p className="bold">3</p>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <p className="grey-title mb-0">
                          Days with office hours
                        </p>
                      </Row>
                      <Row className="mt-0">
                        <p className="bold">{team.officeHours.length}</p>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="7" className="">
                      <div className="mt-5 d-flex justify-content-around p-1">
                        <div className="underline semi-bold text-nowrap">
                          <img
                            src={GitHubIcon}
                            alt="github-icon"
                            className="mentor-conf-modal-icon-sm"
                          />
                          <a
                            href={team.bountyId.url}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="mentor-conf-modal-cursor-pointer mentor-conf-modal-btn-link-fs ms-1">
                              GitHub
                            </span>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col className="p-2 m-2">
                  <Row className="my-2">
                    <Col className="current-team-section">
                      <Row>
                        <p className="small-text mb-3">
                          Current Mentees ({team.mentees.length})
                        </p>
                      </Row>
                      <Row>
                        {team.mentees.length > 0 &&
                          team.mentees.map((mentee, id) => {
                            return (
                              <Col
                                md={4}
                                key={mentee._id}
                                className="select-team-mentee-info"
                              >
                                <img
                                  src={UserImage(mentee)}
                                  height={40}
                                  width={40}
                                  className="active_team_profile_img"
                                  alt="profile"
                                />
                                <p className="active_team_content_current_team_name">
                                  {mentee.fullName}
                                </p>
                              </Col>
                            );
                          })}
                      </Row>
                    </Col>
                    {assessment && !assessment.teamId && (
                      <div
                        align="right"
                        onClick={() => expressInterest(team._id)}
                      >
                        <p className="h3 primary bold pointer px-3">
                          Join Team
                        </p>
                      </div>
                    )}
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
      {teams.length === 0 && (
        <h3 className="fs-5 grey-title medium mt-4">No teams were found...</h3>
      )}
    </>
  );
}
