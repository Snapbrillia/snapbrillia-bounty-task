export const eeoFields = [
  {
    name: 'gender',
    title: 'Gender',
    label: 'Which of the following best describes your gender identity?',
    options: [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
      { value: 'non-binary', label: 'Non-binary' },
      { value: 'another-gender', label: 'Other gender identity' },
    ],
  },
  {
    name: 'ethnicity',
    title: 'Ethnicity',
    label: 'How would you best describe your racial or ethnic identity?',
    options: [
      {
        value: 'native-american',
        label: 'Native American (Not Hispanic or Latinx)',
      },
      { value: 'asian', label: 'Asian (Not Hispanic or Latinx)' },
      {
        value: 'black',
        label: 'Black or African American (Not Hispanic or Latinx)',
      },
      { value: 'hispanic-or-latinx', label: 'Hispanic or Latinx' },
      {
        value: 'pacific-islander',
        label:
          'Native Hawaiian or other Pacific Islander (Not Hispanic or Latinx)',
      },
      { value: 'white-european', label: 'White (Not Hispanic or Latinx)' },
    ],
  },
  {
    name: 'age',
    title: 'Age',
    label: 'What is your current age?',
    options: [
      { value: '<18', label: 'Less than 18 years old' },
      { value: '18-39', label: '18 to 39 years old' },
      { value: '40-54', label: '40 to 54 years old' },
      { value: '55<', label: 'Over 55 years old' },
      { value: 'dnd', label: 'I do not wish to disclose this information.' },
    ],
    // require: 'true',
  },
  {
    name: 'veteranStatus',
    title: 'Veteran Status',
    label: 'Are you an active U.S. Armed Forces member, veteran, or dependant?',
    options: [
      { value: 'veteran', label: 'Yes' },
      { value: 'non-veteran', label: 'No' },
      { value: 'dnd', label: 'I do not wish to disclose this information.' },
    ],
    // require: 'true',
  },
  {
    name: 'impairmentStatus',
    title: 'Impairment Status',
    label: 'Do you have any condition requiring accommodation?',
    options: [
      { value: 'impaired', label: 'Yes' },
      { value: 'non-impaired', label: 'No' },
      { value: 'dnd', label: 'I do not wish to disclose this information.' },
    ],
    // require: 'true',
  },
  {
    name: 'neurodivergence',
    title: 'Neurodiversity',
    label: 'Do you have any neurodiverse condition requiring accomodation?',
    options: [
      { value: 'divergent', label: 'Yes' },
      { value: 'nonDivergent', label: 'No' },
      { value: 'dnd', label: 'I do not wish to disclose this information.' },
    ],
    // require: 'true',
  },
  {
    name: 'degree',
    title: 'Degree',
    label: 'What is the highest level of education completed?',
    options: [
      { value: 'high-school', label: 'High School or GED' },
      { value: 'trade-certification', label: 'Trade or Certification' },
      { value: 'bootcamp', label: 'Bootcamp' },
      { value: 'associate', label: `Associate's` },
      { value: 'bachelor', label: `Bachelor's` },
      { value: 'master', label: `Master's` },
      { value: 'phd', label: 'Doctorate' },
      { value: 'dnd', label: 'I do not wish to disclose this information.' },
    ],
    // require: 'true',
  },
];
