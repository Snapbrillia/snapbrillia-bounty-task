import { useState } from 'react';
import controller from '../controller/two-factor-controller';

const EnableTwoFactorViewModel = () => {
  const [token, setToken] = useState(null);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [totpSent, setTotpSent] = useState(false);
  const [error, setError] = useState(null);

  async function generate() {
    try {
      const result = await controller.generateTwoFactor();
      if (result) {
        setToken(result.data);
      }
    } catch (error) {
      setError(error);
    }
  }
  async function enable(token) {
    try {
      const result = await controller.enableTwoFactor(token);
      if (result) {
        setTwoFactorEnabled(true);
      }
    } catch (error) {
      setError(error);
    }
  }
  async function send() {
    try {
      const result = await controller.sendTotp(token);
      if (result) {
        setTotpSent(true);
      }
    } catch (error) {
      setError(error);
    }
  }
  return {
    token,
    twoFactorEnabled,
    totpSent,
    error,
    generate,
    enable,
    send,
  };
};
export default EnableTwoFactorViewModel;
