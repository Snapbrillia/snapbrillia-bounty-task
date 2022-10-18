import '../css/buttonStyles.css';

export default function BackButton(props) {
  let { btnText } = props;
  return (
    <button type="button" {...props} className="btn-underline">
      {btnText || 'Back'}
    </button>
  );
}
