import { Dropdown } from 'react-bootstrap';
import MentorIcon from '../../assets/icon/snapbrillia_mentor_icon.svg';
import TeamsOnlyModal from '../modals/teamsOnlyModal';

export default function TeamsOnly() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn-after-elem-d-none d-flex align-items-end bg-transparent shadow-none border-0 p-0">
        <img src={MentorIcon} alt="mentor-icon" className="fill-svg-path" />
        <span className="ps-1 btn-teams-only bold text-nowrap">Teams Only</span>
      </Dropdown.Toggle>
      <TeamsOnlyModal />
    </Dropdown>
  );
}
