import { useState } from 'react';
import controller from '../controller/two-factor-controller';

const ValidateTwoFactorViewModel = () => {
  const [totpValidated, setTotpValidated] = useState(false);
  const [totpSent, setTotpSent] = useState(false);
  const [error, setError] = useState(null);

  async function validate(token) {
    try {
      const response = await controller.validateTotp(token);
      if (response) {
        setTotpValidated(true);
      }
    } catch (error) {
      setError(error);
    }
  }

  async function send() {
    try {
      const result = await controller.sendTotp();
      if (result) {
        setTotpSent(true);
      }
    } catch (error) {
      setError(error);
    }
  }
  return {
    totpValidated,
    totpSent,
    error,
    validate,
    send,
  };
};
export default ValidateTwoFactorViewModel;
