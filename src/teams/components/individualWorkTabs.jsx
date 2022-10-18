import { Tabs, Tab } from 'react-bootstrap';
import TeamSummaryDescription from './teamSummaryDescription';
import IndividualReview from './individualReview';
import TeamTopic from './teamTopic';

//INSERT COMPONENTS HERE

//CSS
import '../../shared/css/tabs.css';

const IndividualWorkTabs = ({ bounty }) => {
  return (
    <Tabs
      defaultActiveKey={
        bounty.status === 'done' ? 'review' : 'description'
      }
      className="mb-3"
    >
      {bounty.status === 'done' && (
        <Tab eventKey="review" title="Review">
          <IndividualReview bounty={bounty} />
        </Tab>
      )}
      <Tab eventKey="description" title="Description">
        <TeamSummaryDescription bounty={bounty} />
      </Tab>
      <Tab eventKey="discussion" title="Discussion">
        <TeamTopic bounty={bounty} />
      </Tab>
      <Tab eventKey="git history" title="Git History"></Tab>
    </Tabs>
  );
};

export default IndividualWorkTabs;
