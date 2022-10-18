import React from 'react';
import '../css/buttonStyles.css';

const Finish = ({ type, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`finish-button ${className}`}
    >
      Finish
    </button>
  );
};

export default Finish;
