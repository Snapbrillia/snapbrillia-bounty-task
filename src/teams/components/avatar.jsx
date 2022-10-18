import React, { useState } from 'react';
import '../css/mentorsPersonalInfo.css';
import CapturePicture from '../../profilePages/components/capturePicture';
import { useAuth } from '../../context/authContext';
import { UserImage } from '../../shared/images';

const Avatar = () => {
  const { auth, updateProfile } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const removeImage = async () => {
    if (
      window.confirm(
        'Are you sure you want to remove the current profile photo?'
      )
    ) {
      await updateProfile({ avatar: ''});
    }
  };
  const openReplaceImage = () => {
    setModalOpen(true);
  };
  return (
    <div className="shadow p-0 mb-3 bg-white rounded-circle personal_information_picture_profile">
      <img
        src={UserImage(auth.user)}
        alt="profile"
        height={170}
        width={170}
        style={{ borderRadius: '50%' }}
      />
      <div
        className="flex-column justify-content-center align-items-center personal_information_picture_edit_profile"
        style={{ background: '#A900A699' }}
      >
        <span className="flex" onClick={removeImage}>
          remove
        </span>
        <span className="flex" onClick={openReplaceImage}>
          replace
        </span>
      </div>
      <CapturePicture {...{ modalOpen, setModalOpen }} />
    </div>
  );
};

export default Avatar;
