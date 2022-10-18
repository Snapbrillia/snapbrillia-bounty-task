import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import '../css/changeInfo.css';

const ChangeInfo = () => {
  // State of the ChangeInfo
  const [bounties, setbounties] = useState({
    'Cover Index Construction and Updates with Unit Test': false,
    'Integration of Vite with Trust Wallet': false,
    'FVM Milestone 1 Bug Bounty Program': false,
    'Integration Guide: Lit Protocol': false,
    "Subgraph Doesn't Support": false,
    'Add Second Dividend Systems': false,
    'Create New Hone Interface': false,
  });

  // Question + [options] that will be asked, edit here to add more options(plus changing state)
  const bountiesField = {
    question: 'Please select the *Change to info* you would like to display.',
    options: [
      { value: '1', label: 'Cover Index Construction and Updates with Unit Test' },
      { value: '2', label: 'Integration of Vite with Trust Wallet' },
      { value: '3', label: 'FVM Milestone 1 Bug Bounty Program' },
      { value: '4', label: 'Integration Guide: Lit Protocol' },
      { value: '5', label: "Subgraph Doesn't Support" },
      { value: '6', label: 'Add Second Dividend Systems' },
      { value: '7', label: 'Create New Hone Interface' },
    ],
  };

  // Change the state when onclick
  const handleChangeInfoChange = (field) => {
    const bountiesCopy = bounties;
    bountiesCopy[field] = !bountiesCopy[field];
    bounties(bountiesCopy);
    console.log(bounties);
  };

  return (
    <Container>
      <Col md={6}>
        <h3 className='changeInfo_question'>{bountiesField[`question`]}</h3>
        <form className='changeInfo_form'>
          <h2 className='changeInfo_title'>Bounties</h2>
          {bountiesField[`options`].map((option, ind) => {
            return (
              <div key={ind} >
                <input
                  type={'checkbox'}
                  className={'changeInfo_inputs_check_box'}
                  name={option.label}
                  id={`bountiesField${ind}`}
                  value={''}
                  onClick={(e) => handleChangeInfoChange(option[`value`])}
                />
                <label className={'changeInfo_inputs_label'}>
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
export default ChangeInfo;