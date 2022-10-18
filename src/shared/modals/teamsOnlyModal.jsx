import { Dropdown } from 'react-bootstrap';

export default function TeamsOnlyModal() {
  return (
    <Dropdown.Menu className="p-2">
      <h6 className="bold">Teams Only</h6>
      <p className="small-text ps-1">
        teams only means that you can only complete this gig as a mentor or
        mentee
      </p>
    </Dropdown.Menu>
  );
}
