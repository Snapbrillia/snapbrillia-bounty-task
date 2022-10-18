import { Modal } from 'react-bootstrap';
const PolicyModal = ({
  modalTitle,
  component,
  show,
  setShow,
  setPolicyModals,
}) => {
  const handleClose = () => {
    setShow(false);
    setPolicyModals({ termsOfUse: false, generalPolicy: false });
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg" fullscreen="md-down">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
    </Modal>
  );
};

export default PolicyModal;
