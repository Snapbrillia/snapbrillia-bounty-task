import { Row, Col, Container } from 'react-bootstrap';
import StarIcon from '../../assets/icon/snapbrillia_add_favorites_icon.svg';

//CSS
import '../../bounties/css/improveToolTip.css';

export default function onChainBountyView({ bounty }) {
  return (
    <Container className="p-0" id={Math.random()}>
      <Row className="rounded mx-auto primarybg justify-content-between align-items-center mb-3">
        <Col className="p-2">
          <h6 className="primary m-0">{bounty.name}</h6>
          <span className="grey-title d-block">{bounty.repository}</span>
          <span className="mt-2 d-block">
            <span className="grey-title ui-text-black me-2 tool-tip-difficulty easy">
              {bounty.difficulty}
            </span>
            <span className="grey-title ui-text-black tool-tip-languages me-3">
              {bounty.languages}
            </span>
            <span className="grey-title ui-text-black ">{bounty.position}</span>
          </span>
        </Col>
        <Col className="text-end">
          <span className="grey-title d-block">Rating</span>
          {[true, true, true, true, false].map((e) => (
            <span>
              <img
                src={StarIcon}
                alt="star-icon"
                width={12}
                height={12}
                fill={e ? '#ffd800' : '#fff'}
              />
            </span>
          ))}
          <span className="gresy-title d-block">Date</span>
          <span className="medium grey-title ui-text-black">
            {new Date(bounty.completed).toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </span>
        </Col>
      </Row>
    </Container>
  );
}
