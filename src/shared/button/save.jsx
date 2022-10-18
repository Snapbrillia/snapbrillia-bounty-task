import '../css/buttonStyles.css';

export default function Savebutton({ className, handleClick }) {
  return (
    <button className={`btn-primary ${className}`} onClick={handleClick}>
      Save
    </button>
  );
}
