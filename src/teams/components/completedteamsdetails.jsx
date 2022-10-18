import '../css/completedteamsdetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BountyImage } from '../../shared/images';
import { format } from 'date-fns';

export default function CompletedTeamDetails({bounty}) {
  return (
    <Container fluid className="completedteamsdetails-box">
      <Row>
        <Col className="completedteamsdetails-box-title-section">
          <h3 className="completedteamsdetails-box-title">
            {bounty.name}
          </h3>
          <div className="hyperledger-labs-name px-4">
            <img
              src={BountyImage(bounty)}
              className="hyperledger-labs-logo"
              alt='bounty-logo'
            ></img>
            {bounty.companyId?.companyName}
          </div>
        </Col>

        <Col>
          <Row>
            <h3 className="bounty-reward-text">Bounty Reward</h3>
          </Row>
          <Row>
            <h3 className="money-text">${parseInt(bounty.rewardAmount).toLocaleString('en-US')}</h3>
            <h3 className="crypto-text-num">
              {parseInt(bounty.rewardAmount).toLocaleString('en-US')} 
              <text className="crypto-text-letter">ADA</text>
            </h3>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={1} className="section1">
          <div className="square ">
            <p className="top-text translate-middle-y">{bounty.difficulty}</p>
          </div>
          <div className="top-sub-text">Difficulty</div>
          <div className="bottom-text">
            {bounty.timeEstimation} hours
            <div className="bottom-sub-text">Time Estimation</div>
          </div>
        </Col>
        <Col xs={2} className="section2">
          <div className="circle">
            <p className="top-text translate-middle-y">{bounty.status}</p>
          </div>
          <div className="top-sub-text">Status</div>
          <div className="bottom-text">
            {format(bounty.createdAt ? new Date(bounty.createdAt) : new Date(), 'MM/dd/yyyy')}
            <div className="bottom-sub-text">Date</div>
          </div>
        </Col>
        <Col className="section3">
          <p className="coding-language-text">
            <div className="triangle">
              <p className="top-text translate-middle-y">
                {bounty.languages &&
                  Object.keys(bounty.languages).length > 0 &&
                  Object.keys(bounty.languages)[0]}
              </p>
            </div>
            <h3 className="top-sub-text">Languages</h3>
          </p>
          <p sm={1} className="web3-text">
            {bounty.type}
            <p className="bottom-sub-text">Permission</p>
          </p>
        </Col>
        <Col xs={11} sm={5} md={4} className="pt-5">
          <div className="float-end pt-5">
            <a style={{ textDecoration: 'none', color: '#605F92' }}  href={bounty.url}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="share-link">
                <u>
                  <b className="github">View On Github</b>
                </u>
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
