import { useEffect, useState } from 'react';

//COMPONENTS
import { Container, Row, Col } from 'react-bootstrap';
import BackBtn from '../../shared/button/back';
import NextBtn from '../../shared/button/next';
import TeamSkills from './teamSkills';
import ProfileInfo from './profileInfo';
import OptionalGrants from './optionalGrants';
import OptionalBounties from './optionalBounties';
import OnChainSummary from './onChainSummary';

//CSS
import '../../grants/css/grantsSetup.css';
import '../../shared/css/typography.css';
import '../css/onChainreputation.css';

const OnChainReputationSetup = ({
  setOnChainProfile,
  setOnChainSkills,
  setOnChainGrants,
  setOnChainBounties,
  reset,
  setReset,
}) => {
  const [stepTracker, setStepTracker] = useState(0);

  const [grantSetupSteps, setGrantSetupSteps] = useState([
    {
      label: 'Profile',
      complete: false,
      component: <ProfileInfo setOnChainProfile={setOnChainProfile} />,
    },
    {
      label: 'Skills',
      complete: false,
      component: <TeamSkills setOnChainSkills={setOnChainSkills} />,
    },
    {
      label: 'Grants',
      complete: false,
      component: <OptionalGrants setOnChainGrants={setOnChainGrants} />,
    },
    {
      label: 'Bounties',
      complete: false,
      component: <OptionalBounties setOnChainBounties={setOnChainBounties} />,
    },
    {
      label: 'Summary',
      complete: false,
      component: <OnChainSummary />,
    },
  ]);
  const [currentCompoent, setCurrentComponent] = useState(grantSetupSteps[0]);

  useEffect(() => {
    if (reset) {
      setStepTracker(0);
      setGrantSetupSteps(
        grantSetupSteps.map((step) => {
          return {
            ...step,
            complete: false,
          };
        })
      );
      setCurrentComponent(grantSetupSteps[0]);
    }
    setReset(false);
  }, [reset]);
  //Handlers
  const handleStepChange = (index) => {
    setCurrentComponent(grantSetupSteps[index]);
    setStepTracker(index);

    if (index === 0) {
      setGrantSetupSteps(
        grantSetupSteps.map((step) => {
          return {
            ...step,
            complete: false,
          };
        })
      );
    } else {
      setGrantSetupSteps(
        grantSetupSteps.map((step, stepIndex) => {
          if (stepIndex < index) {
            return {
              ...step,
              complete: true,
            };
          }
          return {
            ...step,
            complete: stepIndex === 0 ? true : false,
          };
        })
      );
    }
  };
  const handleNextStep = (nextStep) => {
    setCurrentComponent(grantSetupSteps[nextStep]);
    if (nextStep === 0) {
      setGrantSetupSteps(
        grantSetupSteps.map((step) => {
          return {
            ...step,
            complete: false,
          };
        })
      );
    }
    setGrantSetupSteps(
      grantSetupSteps.map((step, stepIndex) => {
        if (stepIndex < nextStep) {
          return {
            ...step,
            complete: true,
          };
        } else {
          return {
            ...step,
            complete: false,
          };
        }
      })
    );
    setStepTracker(nextStep);
  };

  return (
    <Container className="grant-setup-container" fluid>
      <Row>
        <Col>
          <h1 className="h1 text-center mt-2 mb-4">
            On-Chain Reputation Set Up
          </h1>
        </Col>
      </Row>
      <div className="stepper-wrapper">
        {grantSetupSteps.map((step, i) => {
          const { label, complete } = step;
          return (
            <div
              key={Math.random().toString(32)}
              className={`stepper-item ${complete && 'completed'}`}
            >
              <div
                onClick={() => {
                  handleStepChange(i);
                }}
                className={`${i === stepTracker && 'active'}
                  step-counter`}
              ></div>
              <div
                className={`${
                  i === stepTracker && 'active-tab-text'
                } step-name grey-title medium`}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
      <Row className="pt-3 reputation-setup-main">
        <Col className="p-0">{currentCompoent.component}</Col>
      </Row>
      <Row className="justify-content-end pb-3 align-items-center">
        <Col xs={2} md={6} lg={3} xxl={2}>
          {stepTracker === 0 ? (
            <BackBtn disabled={stepTracker < 0} />
          ) : (
            <BackBtn
              disabled={stepTracker < 0}
              onClick={() => handleNextStep(stepTracker - 1)}
            />
          )}
        </Col>
        <Col xs={3}>
          {stepTracker === 4 ? (
            <NextBtn btntext={'Review'} />
          ) : (
            <NextBtn
              onClick={() => {
                handleNextStep(stepTracker + 1);
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OnChainReputationSetup;
