//Components
import { Container, Row, Col } from 'react-bootstrap';
import CloseIcon from '../../assets/icon/snapbrillia_close_icon.svg';
import image from '../../assets/profile-photo.jpeg';
import grantsImage from '../../assets/openSource.png';
import StarIcon from '../../assets/icon/snapbrillia_add_favorites_icon.svg';
import OnChainBountyView from './onChainBountyView';

//CSS
import '../css/onChainreputation.css';

const OnChainPreview = ({
  onChainProfile,
  onChainGrants,
  onChainBouties,
  onChainSkills,
  handleOnChainReset,
}) => {
  const { name, profilePhoto, totalContributions, totalParticipation } =
    onChainProfile;
  return (
    <Container>
      <Row className="align-items-center mt-4 mb-4">
        <Col xs={11} md={10} lg={11} className="grey-title">
          Your On-Chain Reputation Preview
        </Col>
        <Col className="text-end">
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={handleOnChainReset}
            className="pointer"
          />
        </Col>
      </Row>
      <Row className="shadow py-3 rounded-2 px-2">
        <h5 className="grey-title p-0">
          <span className="bold">Snapbrillia</span> On-Chain Reputation
        </h5>
        <Col
          style={{ height: '130px' }}
          xs={12}
          className="on-chain-content-bg rounded-2 my-2 py-3"
        >
          {Object.keys(onChainProfile).length > 0 && (
            <Row className="align-items-center">
              {profilePhoto && (
                <Col xs={2}>
                  <img
                    src={image}
                    alt="profile"
                    height={100}
                    width={100}
                    style={{ borderRadius: '50%' }}
                  />
                </Col>
              )}

              {name && (
                <Col>
                  <h3 className="primary bold">Nihn Tran</h3>
                  {[1, 2, 3, 4, 5].map((e) => (
                    <span
                      key={Math.random().toString(32)}
                      className="mx-1 stars"
                    >
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
              )}
              <Col className="grey-title text-end">
                {totalParticipation && (
                  <>
                    <p className="m-0">Total Participation</p>
                    <span className="d-block primary bold mb-2">
                      8 Bounties
                    </span>
                  </>
                )}
                {totalContributions && (
                  <>
                    <p className="m-0">Total Contribution</p>
                    <span className="d-block primary bold">2 Grants</span>
                  </>
                )}
              </Col>
            </Row>
          )}
        </Col>
        <Col
          className="on-chain-content-bg on-chain-bounties-wrapper rounded-2 me-2 py-2"
          xs={6}
        >
          {Object.values(onChainBouties).includes(true) && (
            <>
              <h4 className="bold">Bounties</h4>
              {Object.entries(onChainBouties).map(
                (e) =>
                  e[1] === true && <OnChainBountyView key={Math.random()} />
              )}
            </>
          )}
        </Col>
        <Col className="p-0">
          <Col className="on-chain-skill-wrapper on-chain-content-bg rounded-2 pt-2">
            {Object.values(onChainSkills).includes(true) && (
              <Container>
                <Row>
                  <h4 className="bold m-0 mb-2">Skills</h4>
                  <span className="grey-title  d-block mb-2">Languages</span>

                  {Object.entries(onChainSkills).map((skill) =>
                    skill[1] === true ? (
                      <Col
                        key={Math.random().toString(32)}
                        className="on-chain-skill-pill "
                      >
                        {skill[0]}
                      </Col>
                    ) : null
                  )}
                </Row>
              </Container>
            )}
          </Col>
          <Col className="on-chain-content-bg on-chain-grants-wrapper rounded-2 mt-2 py-2">
            {Object.values(onChainGrants).includes(true) && (
              <Container>
                <h4 className="bold ">Grants</h4>
                {Object.entries(onChainGrants).map((grant) =>
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
            )}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default OnChainPreview;
