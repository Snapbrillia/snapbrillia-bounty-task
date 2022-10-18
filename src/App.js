import React from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfilePage from './profilePages/profilePage';
import Teams from './teams/teams';
import OnChainPreviewPage from './teams/onChainPreviewPage';
import CompletedTeamPage from './teams/components/completedTeamPage';
import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';
import Bounties from './bounties/bounties';
import Bounty from './bounties/bounty';
import GrantSetUp from './grants/components/grantSetup';
import IntroGrants from './grants/introGrants';
import TeamsMentors from './teams/teamsMentor';
import IndividualPage from './teams/individualPage';
import Login from './shared/button/login';
import ViewCartPage from './grants/components/viewCartPage';
import MenteePage from './teams/menteePage';
import ViewCartInfoPage from './grants/components/viewCartInfoPage';
import ViewCartPurchasePage from './grants/components/viewCartPurchasePage';
import JoinTeam from './teams/joinTeam';
import EeoForm from './eeoForm/eeoForm';
import IndividualWorkPage from './teams/components/individualWorkPage';
import TeamPage from './teams/components/teamPage';
import TeamsSharedInformation from './teams/teamsSharedInformation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectRouter from './shared/ProtectedRouter';

import { globalHistory } from '@reach/router';

const originalNavigate = globalHistory.navigate;
globalHistory.navigate = (...props) => {
  if (props[1]) {
    props[1].state = {
      from: globalHistory.location,
    };
  }
  originalNavigate(...props);
};

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Snapbrillia</title>
        <link rel="canonical" href="http://snapbrillia.com" />
        <meta name="description" content="Snapbrillia client website" />
      </Helmet>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Bounties path="/" />
            <Login path="login" />
            <Bounties path="/bounties" />
            <Bounty path="/bounties/:id" />
            <IntroGrants path="/grants" />
            <ViewCartPage path="/view-cart-page" />
            <ViewCartInfoPage path="/view-cart-info-page" />
            <ProtectRouter
              component={TeamsMentors}
              path="/bounties/:id/team-mentor"
            />
            <ProtectRouter
              component={MenteePage}
              path="/bounties/:id/mentee-page"
            />
            <ProtectRouter
              component={IndividualPage}
              path="/bounties/:id/individual"
            />
            <ProtectRouter component={EeoForm} path="/bounties/:id/eeo-form" />
            <ProtectRouter
              component={TeamsSharedInformation}
              path="/bounties/:id/teams-shared-information"
            />
            <ProtectRouter component={JoinTeam} path="/bounties/:id/jointeam" />
            <ProtectRouter component={Teams} path="/bounties/:id/teams" />
            <ProtectRouter component={ProfilePage} path="/profile-page" />
            <ProtectRouter component={Teams} path="/teams" />
            <ProtectRouter component={TeamPage} path="/teams/:id" />
            <ProtectRouter component={IndividualWorkPage} path="/work/:id" />
            <ProtectRouter
              component={CompletedTeamPage}
              path="/completed-teams/:id"
            />
            <ProtectRouter component={GrantSetUp} path="/grant-setup" />
            <ProtectRouter
              component={OnChainPreviewPage}
              path="/on-chain-reputation"
            />
            <ProtectRouter
              component={ViewCartPurchasePage}
              path="/orders/:id"
            />

            {/* <TeamSkills path="/teamSkills" />
            <TeamIntroduction path="/team/introduction" />
            <ShareMentees path="/share-mentees" />
            <PeerReview path="/peer-review" />
            <CapturePicture path="/capturePicture" /> */}
          </Router>
          <ToastContainer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
