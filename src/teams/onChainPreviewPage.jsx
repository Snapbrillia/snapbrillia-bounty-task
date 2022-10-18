import { useState } from 'react';

//Components
import { Container, Row, Col } from 'react-bootstrap';
import OnChainReputationSetup from './components/onChainReputationSetup';
import OnChainPreview from './components/onChainPreview';

const OnChainPreviewPage = () => {
  const [onChainSkills, setOnChainSkills] = useState(
    JSON.parse(window.localStorage.getItem('Skills')) || {}
  );
  const [onChainProfile, setOnChainProfile] = useState(
    JSON.parse(window.localStorage.getItem('Profile')) || {}
  );
  const [onChainGrants, setOnChainGrants] = useState(
    JSON.parse(window.localStorage.getItem('Grants')) || {}
  );
  const [onChainBouties, setOnChainBounties] = useState(
    JSON.parse(window.localStorage.getItem('Bounties')) || {}
  );
  const [reset, setReset] = useState(false);
  //handler
  const handleOnChainReset = () => {
    setReset(true);
    window.localStorage.removeItem('Skills');
    window.localStorage.removeItem('Grants');
    window.localStorage.removeItem('Profile');
    window.localStorage.removeItem('Bounties');
    setOnChainBounties({});
    setOnChainProfile({});
    setOnChainGrants({});
    setOnChainSkills({});
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <OnChainReputationSetup
            reset={reset}
            setReset={setReset}
            handleOnChainReset={handleOnChainReset}
            setOnChainProfile={setOnChainProfile}
            setOnChainGrants={setOnChainGrants}
            setOnChainBounties={setOnChainBounties}
            setOnChainSkills={setOnChainSkills}
          />
        </Col>
        <Col>
          <OnChainPreview
            handleOnChainReset={handleOnChainReset}
            onChainGrants={onChainGrants}
            onChainProfile={onChainProfile}
            onChainBouties={onChainBouties}
            onChainSkills={onChainSkills}
            setOnChainSkills={setOnChainSkills}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OnChainPreviewPage;
