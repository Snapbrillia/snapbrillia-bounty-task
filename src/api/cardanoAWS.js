import axios from 'axios';
const awsUrl = 'http://54.208.236.146:8000';

export async function buildTx(rawUtxos, changeAddress, amount) {
  try {
    const transaction = await axios.post(
      `${awsUrl}/api/transaction/cardano-build-tx`,
      {
        rawUtxos: rawUtxos,
        changeAddress: changeAddress,
        amount: amount,
      }
    );
    return transaction;
  } catch (err) {
    throw err.response.data;
  }
}

export async function signedTx(vKeyWitness, transaction) {
  try {
    const signedTx = await axios.post(
      `${awsUrl}/api/transaction/cardano-sign-tx`,
      {
        vKeyWitness: vKeyWitness,
        transaction: transaction,
      }
    );
    return signedTx;
  } catch (error) {
    throw error.response.data;
  }
}

export async function donateGrants(
  walletAddress,
  donateList,
  generatedWalletId,
  changeAddress
) {
  try {
    const response = axios.post(`/api/express-donate-grant`, {
      walletAddress: walletAddress,
      donateList: donateList,
      generatedWalletId: generatedWalletId,
      changeAddress: changeAddress,
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
}

export async function registerGrant(
  changeAddress,
  generatedWalletId,
  grantInfo
) {
  try {
    const response = await axios.post(`/api/express-create-grant`, {
      changeAddress: changeAddress,
      generatedWalletId: generatedWalletId,
      grantInfo: grantInfo,
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
}
