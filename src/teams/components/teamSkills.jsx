import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import '../css/teamSkills.css';

const TeamSkills = ({ setOnChainSkills }) => {
  const [skills, setSkills] = useState(
    JSON.parse(window.localStorage.getItem('Skills')) || {
      SQL: false,
      JavaScript: false,
      CSS: false,
      Angular: false,
      Mentorship: false,
      'Web 3.0': false,
      'Good Teamwork': false,
    }
  );
  // Question + [options] that will be asked, edit here to add more options(plus changing state)
  const skillsField = {
    question: 'Please select the skills you would like to display',
    options: [
      { value: 'SQL', label: 'SQL' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'CSS', label: 'CSS' },
      { value: 'Angular', label: 'Angular' },
      { value: 'Mentorship', label: 'Mentorship' },
      { value: 'Web 3.0', label: 'Web 3.0' },
      { value: 'Good Teamwork', label: 'Good Teamwork' },
    ],
  };

  // Change the state when onclick
  const handleSkillsChange = (field) => {
    setSkills({
      ...skills,
      [field]: !skills[field],
    });
    setOnChainSkills({
      ...skills,
      [field]: !skills[field],
    });

    window.localStorage.setItem(
      'Skills',
      JSON.stringify({ ...skills, [field]: !skills[field] })
    );
  };

  return (
    <Container>
      <Col>
        <h3 className={'teamSkills_question'}>{skillsField[`question`]}</h3>
        <form className={'teamSkills_form'}>
          <h2 className={'teamSkills_skills_title'}>Skills</h2>
          {skillsField[`options`].map((option, ind) => {
            return (
              <div key={ind}>
                <input
                  type={'checkbox'}
                  checked={skills[option.value]}
                  className={'teamSkills_inputs_check_box'}
                  name={option.label}
                  id={`skillsField${ind}`}
                  value={''}
                  onChange={() => handleSkillsChange(option[`value`])}
                />
                <label className={'teamSkills_inputs_label'}>
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
export default TeamSkills;
