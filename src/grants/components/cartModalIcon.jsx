import React, { useState } from 'react';
import '../css/cartModalIcon.css';
import CartIcon from '../../assets/icon/snapbrillia_cart_icon.svg';

const CartModalIcon = ({ data }) => {
  const [showModal, setShowModal] = useState();
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div onClick={handleModal} className="cart-modal-container">
      <div className="position-relative">
        <span
          style={data.length ? {} : { display: 'none' }}
          className="cart-modal-items"
        >
          {data.length}
        </span>
        <img src={CartIcon} alt="cart-icon" className="cart-modal-icon" />
      </div>
    </div>
  );
};

export default CartModalIcon;
