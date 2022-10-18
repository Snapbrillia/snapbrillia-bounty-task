import Toast from 'react-bootstrap/Toast';
import '../css/tooltip.css';
import ToastContainer from 'react-bootstrap/ToastContainer';
export default function ToastMessage({
  show,
  tooltip_toast,
  setShow,
  message,
  position = 'top-end',
  autohide = true,
}) {
  return (
    <div
    // style={{
    //   position: 'fixed',
    //   width: '100vw',
    //   height: '100vh',
    //   zIndex: 9999,
    // }}
    >
      <ToastContainer
        className={`${tooltip_toast && 'tooltipToast'}`}
        position={position}
      >
        <Toast
          onClose={() => setShow(null)}
          show={show}
          delay={3000}
          autohide={autohide}
        >
          <Toast.Header>
            <strong className="me-auto"></strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
