import '../css/buttonStyles.css';

export default function saveAndContinue(props) {
  const { className, ...others } = props;
  return (
    <div>
      <button {...others} className={`btn-primary ${className}`}>
        Save And Continue
      </button>
    </div>
  );
}
