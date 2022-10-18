import axios from 'axios';
import React, { useState } from 'react';

//Components
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../assets/snapbrillia_logo.svg';
import NextButton from '../shared/button/next';
import Retakebutton from '../shared/button/retake';
import Skipbutton from '../shared/button/skip';
import Submitbutton from '../shared/button/submit';
import { eeoFields } from './eeoFields';
import EeoFormDisclaimer from './eeoFormDisclaimer';
import EeoFormDisclaimerModal from './eeoFormDisclaimerModal';
import EeoFormHeader from './eeoFormHeader';
import EeoFormStepper from './eeoFormStepper';
import EeoFormSubTitle from './eeoFormSubTitle';
import EeoSubmit from './eeoSubmit';
import { useParams } from '@reach/router';
import { useBounty } from '../hooks/useBounty';
import { toast } from 'react-toastify';
import { navigate } from '@reach/router';
import NavBar from '../shared/menus/navBar';
import SubmitWorkModal from '../bounties/components/submitWorkModal.jsx';

//CSS
import '../shared/css/bgColors.css';
import './css/eeoFormStyles.css';
import './css/eeoSubmitStyles.css';

export default function EeoForm() {
  const { id } = useParams();
  const [question, setQuestion] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { assessment, bounty } = useBounty(id);
  const [showSubmitWorkModal, setSubmitWorkModal] = useState(false);

  const [results, setResults] = useState({
    gender: [],
    ethnicity: [],
    age: '',
    veteranStatus: '',
    impairmentStatus: '',
    neurodivergence: '',
    degree: '',
  });
  const [selected, setSelected] = useState({
    gender: [],
    ethnicity: [],
    age: '',
    veteranStatus: '',
    impairmentStatus: '',
    neurodivergence: '',
    degree: '',
  });
  const [radioChecked, setRadioChecked] = useState(false);

  const handleNext = () => {
    if (question <= 6) {
      setQuestion(question + 1);
      setRadioChecked(false);
    } else {
      return;
    }
  };

  //handles a single input, function will be used if the question > 2
  const handleString = (value, field, label, index) => {
    setResults({ ...results, [field]: value });
    setSelected({ ...selected, [field]: label });
    setRadioChecked(index);
  };

  //handles multiple inputs, function will be used if question < 2
  const handleArray = (value, field, label) => {
    let arr = results[field];
    let labelArr = selected[field];

    if (arr.indexOf(value) === -1) {
      arr.push(value);
      labelArr.push(label);
    } else {
      arr.splice(arr.indexOf(value), 1);
      labelArr.splice(labelArr.indexOf(label), 1);
    }
    setResults({ ...results, [field]: arr });
    setSelected({ ...selected, [field]: labelArr });
  };

  const handleSubmit = async () => {
    return axios
      .put('/api/my-profile', {
        ...results,
      })
      .then(() => {
        if (assessment?.ideUrl) {
          if (bounty.useGithubApp) {
            window.open(`${assessment.ideUrl}`, '_blank');
            navigate('/teams');
          } else {
            setSubmitWorkModal(true);
          }
        } else {
          if (bounty.useGithubApp) {
            toast("IDE url isn't ready right now");
            navigate('/teams');
          } else {
            toast("Team isn't ready right now");
            navigate('/teams');
          }
        }
      })
      .catch((err) => console.log(err, 'failed to submit eeo form'));
  };

  const handleRetake = () => {
    //reloads the page on retake
    window.location.reload(false);
  };

  const changeQuestion = (index) => {
    //takes the index of the question and moves it to that index
    setQuestion(index);
    //makes radio inputs false
    setRadioChecked(false);
  };

  return (
    <>
      <NavBar />
      <Container className="primarybg" fluid>
        <Col md={12}>
          <EeoFormHeader />
          <EeoFormSubTitle />
          <EeoFormStepper
            question={question}
            changeQuestion={changeQuestion}
            className="d-none d-sm-block"
          />
          <Row
            className={
              question <= 6 ? 'eeo-form-section' : 'eeo-submit-section'
            }
          >
            <Col md={12}>
              {question <= 6 ? (
                <form className="eeo-options">
                  <h3 className="eeo-question-title eeo-question semi-bold">
                    {eeoFields[question].label}
                  </h3>
                  {/* will render the eeoform with it's fields if the question is <= 6, otherwise it will render the eeosubmit, passing the selected answers down to it */}
                  {eeoFields[question]['options'].map((option, i) => {
                    {
                      /* changes it's checked state based on whether the question is < 2, there can be multiple check states for the first two questions */
                    }
                    return (
                      <div className="eeo-option" key={i}>
                        <input
                          type={question < 2 ? 'checkbox' : 'radio'}
                          name={`eeo-${eeoFields[question].name}`}
                          {...(question < 2
                            ? {
                                checked: results[
                                  eeoFields[question].name
                                ].includes(option.value),
                              }
                            : { checked: i === radioChecked })}
                          id={`eeo-fields${i}`}
                          value={''}
                          onChange={
                            question < 2
                              ? () =>
                                  handleArray(
                                    option.value,
                                    eeoFields[question].name,
                                    option.label
                                  )
                              : () =>
                                  handleString(
                                    option.value,
                                    eeoFields[question].name,
                                    option.label,
                                    i
                                  )
                          }
                        />
                        <label
                          htmlFor={`eeo-fields${i}`}
                          className="h4 semi-bold eeo-label semi-bold"
                        >
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                </form>
              ) : (
                <EeoSubmit results={results} selected={selected} />
              )}
            </Col>
          </Row>
          <Row className="fixed-bottom  eeo-form-bottom-row">
            <Col lg={9} className="d-none d-lg-block">
              <EeoFormDisclaimer />
            </Col>
            <Col lg={3} className=" d-lg-none eeo-form-disclaimer-modal-col">
              <EeoFormDisclaimerModal
                show={showDisclaimer}
                setShowDisclaimer={setShowDisclaimer}
              />
              <button
                onClick={() => setShowDisclaimer(true)}
                className="eeo-form-disclaimer-btn "
              >
                Disclaimer *
              </button>
            </Col>

            <Col
              lg={3}
              className="d-flex align-items-end eeo-form-btns justify-content-end"
            >
              {question < 7 ? (
                <>
                  <div className="eeo-form-btn" onClick={handleNext}>
                    <Skipbutton />
                  </div>
                  <div className="eeo-form-btn" onClick={handleNext}>
                    <NextButton />
                  </div>
                </>
              ) : (
                <>
                  <div onClick={handleRetake}>
                    <Retakebutton />
                  </div>{' '}
                  <div onClick={handleSubmit}>
                    <Submitbutton />
                  </div>
                </>
              )}
            </Col>
            {showSubmitWorkModal && (
              <div>
                <SubmitWorkModal
                  assessment={assessment}
                  setSubmitWorkModal={setSubmitWorkModal}
                  show={showSubmitWorkModal}
                />
              </div>
            )}
          </Row>
        </Col>
      </Container>
    </>
  );
}
