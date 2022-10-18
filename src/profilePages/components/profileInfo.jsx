import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/profileLayout.css';
import 'bootstrap/dist/css/bootstrap.css';
import Flag from '../../assets/icon/snapbrillia_flag_icon.svg';
import Edit from '../../assets/icon/snapbrillia_edit_icon.svg';
import '../../shared/css/textColors.css';
import '../css/profileInfo.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Avatar from '../../teams/components/avatar';

const ProfileInfo = ({ user, updateProfile }) => {
  const [editedUser, setEditedUser] = useState(user);
  const styles = {
    text: {
      textAlign: 'left',
    },
  };
  const getNavClass = ({ isCurrent }) => {
    const navClassName = 'nav-link-text';
    return isCurrent
      ? { className: `${navClassName} active` }
      : { className: `${navClassName}` };
  };
  const [edit, setEdit] = useState(false);
  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (editedUser.dob) {
      setStartDate(new Date(editedUser.dob));
    }
  }, [editedUser]);

  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleSaveClick = () => {
    updateProfile({
      ...editedUser,
      dob: startDate,
    });
  };

  return (
    <Container
      className="profile-info-component-bg"
      style={{ height: '60%', width: '92%' }}
    >
      <Row className="profile-info-row px-4 pt-3 pb-5">
        <Col className="profile-info-column profile-info-title">
          <span onClick={() => setEdit(true)}>
            My Profile
            <img
              src={Edit}
              alt="edit-icon"
              className="profile-info-edit_icon"
            />
          </span>
        </Col>
      </Row>

      <Row className="px-4">
        <Col xs={12} sm={12} md={3}>
          <Avatar user={user} />
        </Col>

        <Col xs={6} sm={4} md={3}>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column small-text profile-info-subtitle"
              style={styles.text}
            >
              Full Name
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column primary profile-info-subtitle"
              style={styles.text}
            >
              {edit ? (
                <input
                  type="text"
                  name="fullName" //key
                  value={editedUser.fullName}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              ) : (
                editedUser.fullName || ''
              )}
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column small-text profile-info-subtitle"
              style={styles.text}
            >
              Email
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column primary profile-info-subtitle"
              style={styles.text}
            >
              {edit ? (
                <input
                  type="text"
                  name="email" //key
                  value={editedUser.email}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              ) : (
                editedUser.email
              )}
            </Col>
          </Row>
        </Col>

        <Col xs={6} sm={4} md={3}>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column small-text profile-info-subtitle"
              style={styles.text}
            >
              Date Of Birth
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column primary profile-info-subtitle"
              style={styles.text}
            >
              {/* date of birth change here */}
              {edit ? (
                <DatePicker
                  selected={startDate}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  onChange={(date) => handleDateChange(date)}
                />
              ) : (
                `${
                  startDate.getMonth() + 1
                }/${startDate.getDate()}/${startDate.getFullYear()}`
              )}
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column small-text profile-info-subtitle"
              style={styles.text}
            >
              Phone Number
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column primary profile-info-subtitle"
              style={styles.text}
            >
              <img src={Flag} alt="flag-icon" />
              <span className="extra-small-text p-1">+1</span>
              {edit ? (
                <input
                  type="text"
                  name="phone" //key
                  value={editedUser.phone || ''}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              ) : (
                editedUser.phone
              )}
            </Col>
          </Row>
        </Col>

        <Col xs={6} sm={4} md={3}>
          <Row className="profile-info-row">
            <Col
              className="profile-info-column small-text profile-info-subtitle"
              style={styles.text}
            >
              Location
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col
              md={{ span: 3 }}
              className="profile-info-column primary profile-info-subtitle"
              style={styles.text}
            >
              {edit ? (
                <input
                  type="text"
                  name="location" //key
                  value={editedUser.location || ''}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              ) : (
                editedUser.location || ''
              )}
            </Col>
          </Row>
          <Row className="profile-info-row">
            <Col>
              {edit ? (
                <div className="d-flex" onClick={() => setEdit(false)}>
                  <button className="profile_cancel_button">Cancel</button>
                  <button
                    className="profile_save_button"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                </div>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
