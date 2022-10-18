import React, { useEffect } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { eeoFields } from './eeoFields';
import './css/eeoFormStyles.css';
import '../shared/css/typography.css';

export default function EeoFormStepper({ question, changeQuestion }) {
  const stepButton = document.getElementsByClassName('RFS-StepButton');
  const stepLabel = document.getElementsByClassName('RFS-Label');
  const activeLabelClass = ['stepLabelActive', 'bold'];
  const inactiveLabelClass = ['grey-title', 'bold'];

  useEffect(() => {
    //gets each of the step buttons
    for (let i = 0; i < stepButton.length; i++) {
      //enables the buttons, as react-form-stepper has them pre-disabled
      stepButton[i].disabled = false;
      //adds click functionality to the buttons so they are interactive
      stepButton[i].addEventListener('click', function () {
        changeQuestion(i);
      });
      //checks if the button matches the clicked question to visit
      if (i === question) {
        //adds an active label class, and removes the grey title class
        stepLabel[i].classList.add(...activeLabelClass);
        stepLabel[i].classList.remove('grey-title');
      } else {
        //otherwise it will have an inactive label class
        stepLabel[i].classList.remove(...activeLabelClass);
        stepLabel[i].classList.add(...inactiveLabelClass);
      }
      //add an inactive class to all of the questions ahead of the current question
      if (i > question) {
        stepButton[i].classList.add('stepButtonInactive');
      }
      //otherwise remove the class because the question has already been visited
      else {
        stepButton[i].classList.remove('stepButtonInactive');
      }
    }
    //useeffect will rerender on each question change...
  }, [question]);
  return (
    <div className="eeo-form-stepper d-none d-sm-block">
      <Stepper
        styleConfig={{
          activeTextColor: '#a900a6',
          activeBgColor: '#a900a6',
          completedBgColor: '#a900a6',
          completedTextColor: '#a900a6',
          size: '16px',
        }}
        connectorStyleConfig={{
          activeColor: '#a900a6',
          disabledColor: '#d3cdcd',
          size: '2px',
        }}
        connectorStateColors
      >
        {eeoFields.map((label, i) => {
          return (
            <Step
              key={i}
              label={label.title}
              children=" "
              active={i <= question}
            />
          );
        })}
      </Stepper>
    </div>
  );
}
