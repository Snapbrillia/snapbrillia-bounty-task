import '../css/buttonStyles.css';

export default function NextButton(props) {
  let { text } = props;
  return (
    <button {...props} className="btn-primary">
      {text || 'Next'}
    </button>
  );
}
