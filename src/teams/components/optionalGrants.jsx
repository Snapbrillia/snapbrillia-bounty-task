import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import '../css/profileInfo.css';

const OptionalGrants = ({ setOnChainGrants }) => {
  // State of the skillsSet asked for the candidate
  const [grants, setGrants] = useState(
    JSON.parse(window.localStorage.getItem('Grants')) || {
      DecentralizedReputationEngine: false,
      GrantsOfficialMatchingPoolFund: false,
    }
  );

  // Question + [options] that will be asked, edit here to add more options(plus changing state)
  const infoField = {
    question: 'Please select the grants you would like to display',
    options: [
      {
        value: 'DecentralizedReputationEngine',
        label: 'Decentralized Reputation Engine',
      },
      {
        value: 'GrantsOfficialMatchingPoolFund',
        label: 'Grants Official Matching Pool Fund',
      },
    ],
  };

  // Change the state when onclick
  const handleInfoChange = (field) => {
    setGrants({
      ...grants,
      [field]: !grants[field],
    });
    setOnChainGrants({
      ...grants,
      [field]: !grants[field],
    });

    window.localStorage.setItem(
      'Grants',
      JSON.stringify({ ...grants, [field]: !grants[field] })
    );
  };

  return (
    <Container>
      <Col>
        <h3 className={'profileInfo_question'}>{infoField[`question`]}</h3>
        <form className={'profileInfo_form'}>
          <h2 className={'profileInfo_skills_title'}>Grants</h2>
          {infoField[`options`].map((option, ind) => {
            return (
              <div key={ind} className="mb-2">
                <input
                  type={'checkbox'}
                  className={'profileInfo_inputs_check_box'}
                  name={option.label}
                  checked={grants[option.value]}
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
export default OptionalGrants;
