import React from 'react';
import '../css/buttonStyles.css';

const Send = (props) => {
  const { className, ...others } = props;
  return (
    <button {...others} className={`${className} btn-primary-medium`}>
      Send
    </button>
  );
};

export default Send;
