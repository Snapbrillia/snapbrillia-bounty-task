import LinkedIn from '../../assets/icon/snapbrillia_linkedin_icon.svg';
import '../css/buttonStyles.css';

export default function LinkedInButton({ onClick }) {
  return (
    <button className="signinbuttons" onClick={onClick}>
      <img src={LinkedIn} alt="linked-in" /> Linkedin
    </button>
  );
}
