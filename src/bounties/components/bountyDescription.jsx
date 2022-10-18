/* eslint-disable react/jsx-no-target-blank */
import { Row, Col } from 'react-bootstrap';
import GitHubIcon from '../../assets/icon/snapbrillia_github_actual_icon.png';
import './css/bountyDescription.css';

const BountyDescription = ({ bounty }) => {
  return (
    <>
      <Row className="my-3">
        <Col>
          <strong>Description:</strong>
        </Col>
        {/* <Col className="github_view_detail_text">
          <div className="float-end">
            <img
              src={GitHubIcon}
              alt="github-icon"
              className={'github_icon mx-2'}
            />
            <a
              href={bounty.url}
              className="github_view_detail_link"
              target="_blank"
            >
              View on Github
            </a>
          </div>
        </Col> */}
      </Row>
      {/* Uses props */}
      <Row>
        <Col className='line-break'>
         {bounty.taskDescription }
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <strong>Submission Requirements:</strong>
        </Col>
      </Row>
      <Row>
        <Col className='line-break'>{bounty.submissionRequirements}</Col>
      </Row>
      <Row>
        <Col className="my-3">
          <strong>Acceptence Criteria:</strong>
        </Col>
      </Row>
      <Row>
        <Col className='line-break'>{bounty.acceptenceCriteria}</Col>
      </Row>
      <Row>
        <Col className="my-3">
          <strong>Important Links:</strong>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col><a href={bounty.importantLink}>{bounty.importantLink}</a></Col>
      </Row>
    </>
  );
};
export default BountyDescription;
