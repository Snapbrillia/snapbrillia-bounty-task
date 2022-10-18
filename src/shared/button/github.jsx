import Github from '../../assets/icon/snapbrillia_github_icon.svg';
import '../css/buttonStyles.css';

export default function GithubButton({ onClick }) {
  return (
    <button className="signinbuttons" onClick={onClick}>
      <img src={Github} alt="github-icon" /> Github
    </button>
  );
}
