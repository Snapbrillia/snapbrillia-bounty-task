import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import StarPicker from 'react-star-picker';
import Resume from '../../assets/icon/snapbrillia_resume_icon.svg';
import Chain from '../../assets/icon/snapbrillia_on_chain_icon.svg';
import Linkedin from '../../assets/icon/snapbrillia_linkedin_actual_icon.svg';
import Discord from '../../assets/icon/snapbrillia_discord_actual_icon.svg';
import Github from '../../assets/icon/snapbrillia_github_actual_icon.svg';

import '../css/confirm_team_select_component.css';

export default function ComfirmTeamSelectComponrnt() {
  const [rating, setRating] = useState(null);
  const onChange = (value) => {
    setRating(value);
  };
  return (
    <Container fluid>
      <Row className="p-5">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          xxl={3}
          className="confirm_team_select_componrnt_bg_1 pt-2"
          style={{ marginRight: '30px' }}
        >
          <Row>
            <Col md={2}>
              <img
                src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                className="confirm_team_select_componrnt_photo"
              />
            </Col>
            <Col md={5} className="confirm_team_select_componrnt_name">
              {'Dennis Makuyev'}
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ paddingRight: '5px' }}>
              <StarPicker
                style={{ paddingTop: '15px' }}
                onChange={onChange}
                value={rating}
                size="12"
              />
            </Col>
            {/*<Col className="confirm_team_select_componrnt_reviews">
              {'120 reviews'}
  </Col>*/}
          </Row>
        </Col>
        <Col className="confirm_team_select_componrnt_bg_2 pt-2">
          <Row>
            <Col md={4}>
              <Row>
                <Col md={1} className="">
                  <img src={Resume} alt="resume-icon" />
                </Col>
                <Col className="confirm_team_select_componrnt_resume_chain">
                  {'Resume'}
                </Col>
              </Row>
              <Row className="pt-2">
                <Col md={1} className="">
                  <img src={Chain} alt="chain-icon" />
                </Col>
                <Col className="confirm_team_select_componrnt_resume_chain">
                  {'On-Chain Reputation'}
                </Col>
              </Row>
            </Col>
            <Col className="pt-3">
              <Row className="">
                <Col md={1}>
                  <img src={Linkedin} alt="linkedIn-icon" />
                </Col>
                <Col className="confirm_team_select_componrnt_linkedin_discord_github">
                  {'LinkedIn'}
                </Col>
                <Col md={1}>
                  <img src={Discord} alt="discord-icon" />
                </Col>
                <Col className="confirm_team_select_componrnt_linkedin_discord_github">
                  {'Discord'}
                </Col>
                <Col md={1}>
                  <img src={Github} alt="github-icon" />
                </Col>
                <Col className="confirm_team_select_componrnt_linkedin_discord_github">
                  {'Github'}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
