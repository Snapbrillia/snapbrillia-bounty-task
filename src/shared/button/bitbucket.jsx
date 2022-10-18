import Bitbucket from '../../assets/icon/snapbrillia_bitbucket_icon.svg';
import '../css/buttonStyles.css';

export default function BitbucketButton({ onClick }) {
  return (
    <button className="signinbuttons" onClick={onClick}>
      <img src={Bitbucket} alt="bitbucket-icon" /> Bitbucket
    </button>
  );
}
