import { useEffect, useRef, useState } from 'react';

//COMPONENTS
import { Col, Container, Row } from 'react-bootstrap';
import { navigate } from '@reach/router';

//CSS
import './css/notifications.css';
import * as NotificationAPI from '../../api/notification';
import { useAuth } from '../../context/authContext';

const Notifications = ({
  showNotifications,
  setShowNotifications,
  setNotificationNumber,
}) => {
  const { auth } = useAuth();
  const componentRef = useRef();
  const [notifications, setNotifications] = useState([]);

  const handleOutsideClick = (componentRef, e) => {
    if (e.target.classList.contains('nav-bar-icon')) return;
    return componentRef.current && !componentRef.current.contains(e.target)
      ? setShowNotifications(false)
      : null;
  };

  const loadNotifications = async (id) => {
    try {
      const { docs } = await NotificationAPI.getListNotifications();
      setNotifications(docs);
    } catch (err) {}
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e) =>
      handleOutsideClick(componentRef, e)
    );
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (auth?.user) {
      loadNotifications();
    }
  }, [auth]);

  useEffect(() => {
    setNotificationNumber(notifications.length);
  }, []);

  return (
    <Container
      ref={componentRef}
      style={{ display: `${showNotifications ? 'block' : 'none'}` }}
    >
      <Row className="notifications-modal primarybg">
        <Row>
          <Col>
            <h5 className="text-start primary mb-3 bold">Notifications</h5>
          </Col>
        </Row>
        {notifications.length > 0 &&
          notifications.map((noti, idx) => (
            <Row key={idx}>
              <Col
                className="inputbg notification rounded-3 text-start p-2 mb-4 pointer"
                onClick={() => navigate(noti.url)}
              >
                <span className="d-block text-start primary medium mb-2">
                  {noti.title}
                </span>
                <span>{noti.content}</span>
                <span className="d-block text-end mt-2">12:32pm</span>
              </Col>
            </Row>
          ))}
        <Row>
          {/* <Col className="text-center">
            <span className="pointer link">Show Older</span>
          </Col>
          <Col className="text-center">
            <span className="pointer link">Mark As Read</span>
          </Col> */}
        </Row>
      </Row>
    </Container>
  );
};

export default Notifications;
