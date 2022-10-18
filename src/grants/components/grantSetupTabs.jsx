//COMPONENTS
import { Container, Row } from 'react-bootstrap';
import GrantDescription from './grantDescription';

//CSS
import '../../shared/css/tabs.css';

const GrantSetupTabs = ({
  grant,
  review,
}) => {
  return (
    <Container className="pt-5">
      <ul className="tabs-general">
        <li>
          <a href="#">Description</a>
        </li>
        <div className="tabs-underline"></div>
        <hr className="tabs-hr" />
      </ul>
      <Row>
        <GrantDescription
          grant={grant}
        />
      </Row>
    </Container>
  );
};

export default GrantSetupTabs;
