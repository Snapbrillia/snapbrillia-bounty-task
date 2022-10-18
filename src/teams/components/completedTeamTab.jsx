import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import TeamList from './teamList';
import TeamTopic from './teamTopic';
import TeamsReview from './teamsReview';
import Reward from './reward';
import PeerReviewComponent from './peerReviewComponent';
import * as teamApi from '../../api/teams';
import { toast } from 'react-toastify';

//CSS
import '../../shared/css/tabs.css';

const CompletedTeamTab = ({ team }) => {
  const [receivedTeamPay, setReceivedTeamPay] = useState({});
  const [receivePercent, setReceivePercent] = useState('usd');

  const cashout = async () => {
    try {
      if (!team.bountyId?.rewardAmount) {
        throw new Error('Invalid payment');
      }
      const cashoutInfo = {};
      Object.keys(receivedTeamPay).map(mentee => {
        if (receivePercent === 'usd') {
          cashoutInfo[mentee] = Number(receivedTeamPay[mentee]);
        } else {
          cashoutInfo[mentee] = Number(receivedTeamPay[mentee]) * team.bountyId?.rewardAmount;
        }
      })
      const teamInfo = await teamApi.rewardTeam(team._id, cashoutInfo);
      toast('Cashout success');
      window.location.reload();
    } catch (err) {
      toast(err.message);
    }
  }

  return (
    <>
      <Tabs defaultActiveKey="review" classname="mb-3">
        <Tab eventKey="review" title="Review">
          <TeamsReview team={team} cashout={cashout}/>
          {!team.rewarded && (
            <Reward team={team} receivedTeamPay={receivedTeamPay} setReceivedTeamPay={setReceivedTeamPay} receivePercent={receivePercent} setReceivePercent={setReceivePercent}/>
          )}
        </Tab>
        {/* <Tab eventKey="description" title="Description">
            <TeamSummaryDescription />
          </Tab> */}
        <Tab eventKey="team" title="Team">
          <TeamList team={team} />
        </Tab>
        <Tab eventKey="discussion" title="Discussion">
          <TeamTopic bounty={team?.bountyId}/>
        </Tab>
        <Tab eventKey="git history" title="Git History"></Tab>
        <Tab eventKey="peer review" title="Peer Review">
          <PeerReviewComponent team={team} />
        </Tab>
      </Tabs>
    </>
  );
};

export default CompletedTeamTab;
