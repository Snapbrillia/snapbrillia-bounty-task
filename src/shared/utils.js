import { toast } from 'react-toastify';
import {
  buildTx,
  donateGrants,
  signedTx,
  registerGrant,
} from '../api/cardanoAWS';

export const timeAgo = function (time) {
  var date = new Date(time);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' Years Ago';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' Months Ago';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' Days Ago';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' Hours Ago';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' Minutes Ago';
  }
  return Math.floor(seconds) + ' Seconds Ago';
};

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}

export async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );

  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
    0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
  );

  // As Base64 string
  return canvas;
}

export default function formatCurrency(bounty) {
  let result = parseInt(bounty.rewardAmount).toLocaleString('en-US');
  if (bounty.rewardAmountCurrency) {
    let parts = bounty.rewardAmountCurrency.split(',');
    switch (parts[0].toLowerCase()) {
      case 'bank':
        result = '$' + `${bounty.rewardAmount}`;
        break;
      case 'crypto':
        result = `${bounty.rewardAmount} ${parts[2]}`;
        break;
      default:
        result = parseInt(bounty.rewardAmount).toLocaleString('en-US');
    }
  } else {
    result = '$' + `${bounty.rewardAmount}`;
  }
  return result;
}

export function formatGrantCurrentlyRaised(grant) {
  let formatted;
  let amount = parseInt(grant.currentAmount).toLocaleString('en-US');
  if (grant?.currencyType === '₳DA') {
    formatted = `${amount} ${grant.currencyType}`;
  } else {
    formatted = `$ ${amount}`;
  }
  return formatted;
}

export function formatPrefix(grant) {
  let formatted;
  if (grant?.currencyType === '₳DA') {
    formatted = ``;
  } else {
    formatted = `$`;
  }
  return formatted;
}

export function formatTrailingCurrency(grant) {
  let formatted;
  if (grant?.currencyType === '₳DA') {
    formatted = `₳DA`;
  } else {
    formatted = `USD`;
  }
  return formatted;
}

export async function donateProjectCardano(cart, setPage) {
  try {
    const walletName = cart[0].payment.name.toLowerCase();
    const walletFound = !!window?.cardano?.[walletName];

    if (!walletFound) {
      toast('Wallet not found');
      return;
    }

    const walletApi = await window.cardano[walletName].enable();
    const rawUtxos = await walletApi.getUtxos();
    const changeAddress = await walletApi.getChangeAddress();

    let amount = 0;
    let donateList = '';

    cart.forEach((item) => {
      amount += parseInt(item.amount);
      donateList =
        donateList +
        ' ' +
        `${item.grant.cardanoPKH} ${parseInt(item.amount) * 1000000}`;
    });

    // + 10 to cover transaction fees and will be transferred back to the user
    const transaction = await buildTx(rawUtxos, changeAddress, amount + 10);
    const vKeyWitnesses = await walletApi.signTx(
      transaction.data.transaction,
      true
    );
    const serializedSignedTx = await signedTx(
      vKeyWitnesses,
      transaction.data.transaction
    );
    await walletApi.submitTx(serializedSignedTx.data.signedTransaction);

    toast('Please wait while we process your donation to the blockchain');

    const response = await donateGrants(
      transaction.data.walletAddress,
      donateList,
      transaction.data.generatedWalletId,
      changeAddress
    );

    if (response.status === 200) {
      toast('Donation successful');
      await setPage();
    }
    return response;
  } catch (error) {
    console.log(error);
    toast("Couldn't send Ada Transaction");
  }
}

export async function createGrantPayment(grantInfo) {
  try {
    const walletName = grantInfo.payment.walletName.toLowerCase();
    const walletFound = !!window?.cardano?.[walletName];
    if (!walletFound) {
      toast('Wallet not found');
      return;
    }
    const walletApi = await window.cardano[walletName].enable();

    const rawUtxos = await walletApi.getUtxos();
    const changeAddress = await walletApi.getChangeAddress();

    const transaction = await buildTx(rawUtxos, changeAddress, 10);
    const vKeyWitnesses = await walletApi.signTx(
      transaction.data.transaction,
      true
    );
    const serializedSignedTx = await signedTx(
      vKeyWitnesses,
      transaction.data.transaction
    );
    await walletApi.submitTx(serializedSignedTx.data.signedTransaction);

    toast('Please wait while we register your project to the blockchain');

    const grant = await registerGrant(
      changeAddress,
      transaction.data.generatedWalletId,
      grantInfo
    );

    if (grant.status === 200) {
      toast('Grant registered successfully');
    }

    return grant;
  } catch (error) {
    toast("Couldn't send Ada Transaction");
  }
}
