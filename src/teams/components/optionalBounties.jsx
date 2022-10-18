import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import '../css/profileInfo.css';

const OptionalBounties = ({ setOnChainBounties }) => {
  const [bounties, setBounties] = useState(
    JSON.parse(window.localStorage.getItem('Bounties')) || {
      ConverIndexContructionandUpdatesWithUnitTest: false,
      IntegrationGuideLitProtocol: false,
      AddSecondDivisendSystem: false,
    }
  );

  // Question + [options] that will be asked, edit here to add more options(plus changing state)
  const infoField = {
    question: 'Please select the bounties you would like to display',
    options: [
      {
        value: 'ConverIndexContructionandUpdatesWithUnitTest',
        label: 'Conver Index Contruction and Updates With Unit Test',
      },
      {
        value: 'IntegrationGuideLitProtocol',
        label: 'Integration Guide Lit Protocol',
      },
      {
        value: 'AddSecondDivisendSystem',
        label: 'Add Second Divisend System',
      },
    ],
  };

  // Change the state when onclick
  const handleInfoChange = (field) => {
    setBounties({
      ...bounties,
      [field]: !bounties[field],
    });
    setOnChainBounties({
      ...bounties,
      [field]: !bounties[field],
    });
    window.localStorage.setItem(
      'Bounties',
      JSON.stringify({ ...bounties, [field]: !bounties[field] })
    );
  };

  return (
    <Container>
      <Col>
        <h3 className={'profileInfo_question'}>{infoField[`question`]}</h3>
        <form className={'profileInfo_form'}>
          <h2 className={'profileInfo_skills_title'}>Bounties</h2>
          {infoField[`options`].map((option, ind) => {
            return (
              <div key={ind} className="mb-2">
                <input
                  type={'checkbox'}
                  className={'profileInfo_inputs_check_box'}
                  name={option.label}
                  checked={bounties[option.value]}
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
export default OptionalBounties;
