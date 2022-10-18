import EmptyProfile from '../assets/snapbrillia_no_profile_photo.png';
import GrantLogo from '../assets/snapbrillia_no_company_logo.png';
import BountyLogo from '../assets/snapbrillia_no_company_logo.png';
import { snapbrilliaFile } from '../api/files';

export const UserImage = (user) => {
 return user?.avatar ? snapbrilliaFile(user?.avatar) : EmptyProfile;
}

export const BountyImage = (bounty) => {
  return bounty?.companyId?.companyLogo ? snapbrilliaFile(bounty?.companyId?.companyLogo) : BountyLogo;
}

export const GrantImage = (grant) => {
  return grant?.projectLogo ? snapbrilliaFile(grant?.projectLogo) : GrantLogo;
}
