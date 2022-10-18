import Google from '../../assets/icon/snapbrillia_google_icon.svg';
import '../css/buttonStyles.css';

export default function GoogleButton({ onClick }) {
  return (
    <button className="signinbuttons" onClick={onClick}>
      <img src={Google} alt="google-icon" /> Google
    </button>
  );
}
