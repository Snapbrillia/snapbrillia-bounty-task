import { Tabs, Tab } from 'react-bootstrap';
import TeamSummaryDescription from './teamSummaryDescription';
import TeamList from './teamList';
import TeamTopic from './teamTopic';

//INSERT COMPONENTS HERE

//CSS
import '../../shared/css/tabs.css';

const TeamTabs = ({team}) => {
  return (
    <>
      <Tabs
        defaultActiveKey="description"
        className="mb-3"
      >
        <Tab eventKey="description" title="Description">
          <TeamSummaryDescription bounty={team?.bountyId} />
        </Tab>
        <Tab eventKey="team" title="Team">
          <TeamList team={team}/>
        </Tab>
        <Tab eventKey="discussion" title="Discussion">
          <TeamTopic bounty={team?.bountyId}/>
        </Tab>
        <Tab eventKey="git history" title="Git History">
        </Tab>
      </Tabs>
    </>
  );
};

export default TeamTabs;
