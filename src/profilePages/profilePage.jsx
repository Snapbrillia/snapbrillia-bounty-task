import { Row, Col } from 'react-bootstrap';
import Navbar from '../shared/menus/navBar';
import ProfileInfo from './components/profileInfo';
import LinkAccount from './components/linkAccount';
import ButtonComponent from './components/buttonComponent';
import OffChainResume from './components/offChainResume';
import OnChainResume from './components/verifiedResume';
import { useAuth } from '../context/authContext';

export default function ProfilePage() {
  const { auth, updateProfile } = useAuth();

  return (
    <>
      <Navbar />
      <ProfileInfo user={auth.user} updateProfile={updateProfile} />
      <LinkAccount />
      <ButtonComponent user={auth.user} />
      <div className="container p-0">
        <Row>
          <Col>
            <OnChainResume candidate={auth.user} />
          </Col>
          <Col>
            <OffChainResume />
          </Col>
        </Row>
      </div>
    </>
  );
}
