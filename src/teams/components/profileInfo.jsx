import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import '../css/profileInfo.css';

const ProfileInfo = ({ setOnChainProfile }) => {
  // State of the skillsSet asked for the candidate
  const [info, setInfo] = useState(
    JSON.parse(window.localStorage.getItem('Profile')) || {
      name: false,
      profilePhoto: false,
      totalParticipation: false,
      totalContributions: false,
    }
  );

  // Question + [options] that will be asked, edit here to add more options(plus changing state)
  const infoField = {
    question: 'Please select the information you would like to display',
    options: [
      { value: 'name', label: 'Name' },
      { value: 'profilePhoto', label: 'Profile Photo' },
      { value: 'totalParticipation', label: 'Total Participation' },
      { value: 'totalContributions', label: 'Total Contributions' },
    ],
  };

  // Change the state when onclick
  const handleInfoChange = (field) => {
    setInfo({
      ...info,
      [field]: !info[field],
    });
    setOnChainProfile({
      ...info,
      [field]: !info[field],
    });
    window.localStorage.setItem(
      'Profile',
      JSON.stringify({ ...info, [field]: !info[field] })
    );
  };

  return (
    <Container>
      <Col>
        <h3 className={'profileInfo_question'}>{infoField[`question`]}</h3>
        <form className={'profileInfo_form'}>
          <h2 className={'profileInfo_skills_title'}>Details</h2>
          {infoField[`options`].map((option, ind) => {
            return (
              <div key={ind} className="mb-2">
                <input
                  type={'checkbox'}
                  className={'profileInfo_inputs_check_box'}
                  name={option.label}
                  checked={info[option.value]}
                  id={`skillsField${ind}`}
                  value={''}
                  onChange={(e) => handleInfoChange(option[`value`])}
                />
                <label className={'profileInfo_inputs_label'}>
                  {option[`label`]}
                </label>
              </div>
            );
          })}
        </form>
      </Col>
    </Container>
  );
};
export default ProfileInfo;
