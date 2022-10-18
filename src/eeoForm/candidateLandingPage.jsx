import { useState } from 'react';
import data from '../__test__/__testData__/testData';
import { navigate } from '@reach/router';

//CSS
import './css/candidateLandingPage.css';

//COMPONENTS
import { Container, Row, Col } from 'react-bootstrap';
import TermsOfUseText from '../policyPage/components/termsOfUseText';
import GeneralPolicyText from '../policyPage/components/generalPolicyText';
import PrivacyModal from '../policyPage/policyModal';

//Icons
import SnapBrilliaLogo from '../assets/snapbrillia_logo.svg';
import ClockIcon from '../assets/icon/snapbrillia_clock_icon.svg';
import ChallengeIcon from '../assets/icon/snapbrillia_challenge_icon.svg';

const CandidateLandingPage = () => {
  const [agreement, setAgreement] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [policyModals, setPolicyModals] = useState({
    termsOfUse: false,
    generalPolicy: false,
  });

  const toggleAgreement = (event) => {
    setAgreement(event.target.checked);
  };
  return (
    <Container>
      <Row className="pt-2" md={12} lg={6}>
        <img src={SnapBrilliaLogo} alt="snapbrillia-logo" />
      </Row>
      <Row>
        <h1 className="h1 text-center mb-4">Assessment</h1>
      </Row>
      <Row>
        <Col className="col-6 text-end">
          <img src={ClockIcon} alt="clock-icon" />
          <span className="ms-1 label h6">45 Minutes</span>
        </Col>
        <Col className="col-6">
          <img src={ChallengeIcon} alt="challenge-icon" />
          <span className="label h6">15 Challenges</span>
        </Col>
      </Row>
      <Row className="py-5">
        <h2>Before we get started...</h2>
      </Row>
      <Row className="ms-2">
        <ol>
          <li>
            There are
            <span> 2 or more </span>
            challenges. Finish as many as you can in the alloted time.
          </li>
          <li>
            There is no option to pause. Make sure you will not be interrupted
            for
            <span> 5 Minutes</span>.
          </li>
          <li>
            Do not use any ready-made solutions. Plagiarism or deception is
            easily identified.
          </li>
          <li>
            Any plagiarism or deception will subsequently invalidate any offer
            of position.
          </li>
          <li>
            Your solutions should consider all possible corner cases and handle
            large input efficiently.
          </li>
          <li>
            Completing or passing the example tests does not indicate that your
            solution is correct.
          </li>
          <li>
            If you accidentally close your browser, use the invitation link to
            get back to your test.
          </li>
          <li>
            Access this work sample on a Chrome browser and a computer with
            solid internet.
            <br />
            Your code pairing interview will be in <strong>JavaScript</strong>
          </li>
        </ol>
      </Row>
      <Row className="position-relative mb-4 px-2">
        <Col className="border border-2 rounded p-3 mt-5" md={12} lg={4}>
          <h1 className="h2">Help</h1>
          <p className="policy_typography lh-lg">
            {' '}
            If you require accommodations or special arrangements in order to
            complete the work sample{' '}
            <a
              className="bold primary text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href={`mailto:${data.user.email}?subject=Accommodations%20Request%20on%20Snapbrillia%20for%20${data.WSProject.jobTitle}%20at%20${data.company.companyName}&body=Hi%20${data.user.firstName}%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20accommodation%20for%20${data.WSProject.jobTitle}%20at%20${data.company.companyName}%3A%0A%0D%0A%0D%0AThank%20you%2C%0D%0A${data.candidate.firstName} ${data.candidate.lastName}%0D%0A${data.candidate.email}%0D%0A${data.candidate.phone}%0D%0A%0D%0AP.S.%20Occasionally%20this%20email%20is%20in%20promotions%2C%20updates%2C%20or%20spam.%20Please%20add%20us%20into%20your%20contacts%20book%2Fwhitelist%20and%20drag%20%26%20drop%20our%20emails%20into%20your%20primary%20inbox%20to%20ensure%20delivery%20of%20future%20interview%20invitations%20to%20your%20inbox.%0D%0A__________________________%0D%0AIMPORTANT%3A%20The%20contents%20of%20this%20email%20and%20any%20attachments%20are%20confidential.%20They%20are%20intended%20for%20the%20named%20recipient(s)%20only.%20If%20you%20have%20received%20this%20email%20by%20mistake%2C%20please%20notify%20the%20sender%20immediately%20and%20do%20not%20disclose%20the%20contents%20to%20anyone%20or%20make%20copies%20thereof.`}
            >
              inform your sponsor
            </a>{' '}
            and they will try to provide support.
          </p>
        </Col>
        <Col
          className="candidate-landindg-page-checkbox text-end align-self-end mt-5"
          md={12}
          lg={8}
        >
          <input
            type="checkbox"
            checked={agreement}
            onChange={toggleAgreement}
          />
          <p>
            I have read and accepted{' '}
            <span className="bold paragraph primary">
              <span
                className="pointer"
                onClick={() => {
                  setShowModal(true);
                  setPolicyModals({ ...policyModals, termsOfUse: true });
                }}
              >
                Terms Of Use
              </span>{' '}
              And{' '}
              <span
                className="pointer"
                onClick={() => {
                  setShowModal(true);
                  setPolicyModals({ ...policyModals, generalPolicy: true });
                }}
              >
                Privacy Policy
              </span>
            </span>
          </p>
          {policyModals.termsOfUse ? (
            <PrivacyModal
              show={showModal}
              setShow={setShowModal}
              setPolicyModals={setPolicyModals}
              modalTitle="Terms Of Use"
              component={<TermsOfUseText />}
            />
          ) : policyModals.generalPolicy ? (
            <PrivacyModal
              show={showModal}
              setShow={setShowModal}
              setPolicyModals={setPolicyModals}
              modalTitle="Privacy Policy"
              component={<GeneralPolicyText />}
            />
          ) : null}
          <button
            style={{
              background: agreement ? '#A900A6' : '#cacaca',
              color: !agreement ? '#9c9c9c' : '',
              cursor: agreement ? 'pinter' : '',
            }}
            className="landing-next-btn"
            disabled={!agreement}
            onClick={() => navigate('/eeo-form')}
          >
            Next
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateLandingPage;
