import { Row, Col } from 'react-bootstrap';
import Navbar from '../shared/menus/navBar';
import ProfileInfo from './components/profileInfo';
import LinkAccount from './components/linkAccount';
import ButtonComponent from './components/buttonComponent';
import OffChainResume from './components/offChainResume';

export default function EditProfilePage() {
  return (
    <>
      <Navbar />
      <ProfileInfo edit={true} />
      <LinkAccount />
      <ButtonComponent />
      <div className="container p-0">
        <Row>
          <Col>
            <OffChainResume />
          </Col>
          <Col>
            <OffChainResume />
          </Col>
        </Row>
      </div>
    </>
  );
}
