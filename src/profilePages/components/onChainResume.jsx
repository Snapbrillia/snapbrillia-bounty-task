//Components
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CloseIcon from '../../assets/icon/snapbrillia_close_icon.svg';
import image from '../../assets/profile-photo.jpeg';
import grantsImage from '../../assets/openSource.png';
import StarIcon from '../../assets/icon/snapbrillia_add_favorites_icon.svg';
import OnChainBountyView from '../../teams/components/onChainBountyView';
import { getOnChainResume } from '../../api/bountyCandidates';
//CSS
import '../../teams/css/onChainreputation.css';
import { set } from 'lodash';

const OnChainResume = ({ candidateId }) => {
  const [loaded, setLoaded] = useState(false);
  const [resume, setResume] = useState(null);
  const [bounties, setBounties] = useState([]);

  const on_bounties_scroll = (e) => {
    let take = bounties.length + 4;
    let batch = resume.onChainBounties.slice(0, take);
    setBounties(batch);
  };

  useEffect(() => {
    if (!loaded) {
      getOnChainResume(candidateId)
        .then((data) => {
          setResume(data);
          setLoaded(true);
          let batch = data.onChainBounties.slice(0, 4);
          setBounties(batch);
        })
        .catch((error) => {
          setLoaded(false);
        });
    }
  }, [candidateId, loaded]);

  return (
    <Container>
      {loaded && (
        <Row className="shadow py-3 rounded-2 px-2">
          <h5 className="grey-title p-0">
            <span className="bold">Snapbrillia</span> On-Chain Reputation
          </h5>
          <Col
            style={{ height: '130px' }}
            xs={12}
            className="on-chain-content-bg rounded-2 my-2 py-3"
          >
            <Row className="align-items-center">
              {resume.profilePhoto && (
                <Col xs={2}>
                  <img
                    src={resume.profilePhoto}
                    alt="profile"
                    height={100}
                    width={100}
                    style={{ borderRadius: '50%' }}
                  />
                </Col>
              )}

              <Col>
                <h3 className="primary bold">{resume.name}</h3>
                {[1, 2, 3, 4, 5].map((e) => (
                  <span key={Math.random().toString(32)} className="mx-1 stars">
                    <img
                      src={StarIcon}
                      alt="star-icon"
                      width={18}
                      height={18}
                      fill="#ffd800"
                    />
                  </span>
                ))}
              </Col>
              <Col className="grey-title text-end">
                <>
                  <p className="m-0">Total Participation</p>
                  <span className="d-block primary bold mb-2">
                    {resume.totalParticipation} Bounties
                  </span>
                </>
                <>
                  <p className="m-0">Total Contribution</p>
                  <span className="d-block primary bold">
                    {resume.totalContributions} Grants
                  </span>
                </>
              </Col>
            </Row>
          </Col>
          <Col
            className="on-chain-content-bg on-chain-bounties-wrapper rounded-2 me-2 py-2"
            onScroll={on_bounties_scroll}
            xs={6}
          >
            <>
              <h4 className="bold">Bounties</h4>
              {bounties.map((b) => (
                <OnChainBountyView bounty={b} />
              ))}
            </>
          </Col>
          <Col className="p-0">
            <Col className="on-chain-skill-wrapper on-chain-content-bg rounded-2 pt-2">
              <Container>
                <Row>
                  <h4 className="bold m-0 mb-2">Skills</h4>
                  <span className="grey-title  d-block mb-2">Languages</span>
                  {resume.onChainSkills.map((skill) => (
                    <Col
                      key={Math.random().toString(32)}
                      className="on-chain-skill-pill "
                    >
                      {skill}
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
            <Col className="on-chain-content-bg on-chain-grants-wrapper rounded-2 mt-2 py-2">
              <Container>
                <h4 className="bold ">Grants</h4>
                {Object.entries(resume.onChainGrants).map((grant) =>
                  grant[1] === true ? (
                    <Row
                      key={Math.random().toString(32)}
                      className="align-items-center primarybg rounded mb-3"
                    >
                      <Col xs={2} className="me-2">
                        <img
                          src={grantsImage}
                          alt="profile"
                          height={50}
                          width={50}
                          style={{ borderRadius: '50%' }}
                        />
                      </Col>
                      <Col xs={6}>
                        <span className="grey-title bold primary">
                          Decentralized Reputation Engine
                        </span>
                        <span className="grey-title d-block">Creator</span>
                      </Col>
                      <Col className="text-end">
                        <span className="d-block grey-title">test</span>
                        <span className="grey-title brand-primary bold">
                          $5.00
                        </span>
                      </Col>
                    </Row>
                  ) : null
                )}
              </Container>
            </Col>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default OnChainResume;
