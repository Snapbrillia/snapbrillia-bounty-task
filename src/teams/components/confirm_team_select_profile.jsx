import { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import StarPicker from 'react-star-picker';
import Resume from '../../assets/icon/snapbrillia_resume_icon.svg';
import Chain from '../../assets/icon/snapbrillia_on_chain_icon.svg';

import '../css/confirm_team_select_profile.css';

export default function ConfirmTeamSelectProfile() {
  const [rating, setRating] = useState(null);
  const onChange = (value) => {
    setRating(value);
  };
  return (
    <Container fluid className="p-5">
      <Row className="confirm_team_select_profile_title">
        {'Your Team Selection'}
      </Row>
      <Row className="mt-4">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={3}
          xxl={3}
          className="confirm_team_select_profile_bg p-3"
        >
          <Row>
            <Col>
              <img
                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                className="confirm_team_select_profile_photo"
              />
            </Col>
            <Col className="confirm_team_select_profile_photo_name">
              {'Ninh Tran'}
            </Col>
          </Row>
          <Row>
            <Col>
              <StarPicker
                className="mt-2"
                onChange={onChange}
                value={rating}
                size="20"
              />
            </Col>
            {/*<Col className="confirm_team_select_profile_review">
              {'120 reviews'}
  </Col>*/}
          </Row>
          <Row className="confirm_team_select_profile_icon_pos">
            <div className="d-flex align-items-center">
              <img src={Resume} alt="resume-icon" />
              <input
                className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap me-2"
                type="button"
                value="Resume"
              />
              <img src={Chain} alt="chain-icon" />
              <input
                className="mentor-conf-modal-resume-btn-fs border-0 bg-white primary semi-bold text-wrap"
                type="button"
                value="On-Chain Reputation"
              />
            </div>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xl={9} xxl={9}>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={9}
              xxl={9}
              className="confirm_team_select_profile_content_p"
            >
              <Row>
                <Col>
                  <p className="confirm_team_select_profile_subtitle">
                    Completed bounties
                  </p>
                  <p className="confirm_team_select_profile_content_1">10</p>
                </Col>
                <Col>
                  <p className="confirm_team_select_profile_subtitle">
                    Years of experience
                  </p>
                  <p className="confirm_team_select_profile_content_1">1-3</p>
                </Col>
                <Col>
                  <p className="confirm_team_select_profile_subtitle">
                    Days with office hours
                  </p>
                  <p className="confirm_team_select_profile_content_1">4</p>
                </Col>
              </Row>
              <Row>
                <p className="confirm_team_select_profile_subtitle confirm_team_select_profile_m">
                  What other’s have said
                </p>
                <p className="confirm_team_select_profile_content_2">
                  “Ninh is an experienced mentor and he isn’t afraid to go above
                  and beyond to ensure that the team is inspired to work hard &
                  work efficiently. Not only is he such a great guy to team up
                  with, but he’s a joy to be around.”
                </p>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={3} xxl={3}>
              <Row>
                <p className="small-text mb-3 confirm_team_select_profile_mentee_title">
                  Current Mentees (6)
                </p>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                    <Col>
                      <img
                        src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                        height={40}
                        width={40}
                        className="confirm_team_select_profile_img"
                        alt="profile"
                      />
                      <p className="confirm_team_select_profile_mentee_name">
                        Name
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="pt-5">
            <div>
              <input
                style={{ float: 'right' }}
                className="btn-primary"
                type="button"
                value="Confirm"
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
