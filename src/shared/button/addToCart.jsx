import React from 'react';
import '../css/buttonStyles.css';

const AddToCart = (props) => {
  return (
    <button
      {...props}
      style={{ width: '113px' }}
      className={`btn-primary-medium ${props.className}`}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
