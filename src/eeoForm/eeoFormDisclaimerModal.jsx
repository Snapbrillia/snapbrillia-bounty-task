import '../shared/css/textColors.css';
import '../shared/css/typography.css';
import './css/eeoFormStyles.css';
import Modal from 'react-bootstrap/Modal';

export default function EeoFormDisclaimerModal({ show, setShowDisclaimer }) {
  return (
    <Modal show={show} onHide={() => setShowDisclaimer(false)}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="eeo-form-disclaimer-modal">
        <p>
          *The Equal Employment Opportunity Commission requires all private
          employers with 100 or more employees as well as federal contractors to
          complete an EEO-1 report each year. Completion of this form is
          completely voluntary and will not affect your opportunity for
          employment, or the terms or conditions of your employment. This form
          will be kept separate from all other personnel records only accessed
          by the Human Resources department. If you choose not to self-identify
          or skip at this time, the federal government requires companies to
          determine this information by visual survey or other available
          information.
        </p>
      </Modal.Body>
    </Modal>
  );
}
