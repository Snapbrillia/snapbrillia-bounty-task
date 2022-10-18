import React from 'react';
import '../css/buttonStyles.css';

const Exit = ({ className, onClick }) => {
  return <button className={`btn-primary ${className}`}>Exit</button>;
};

export default Exit;
