import '../css/buttonStyles.css';

export default function BackTo(props) {
  let { text, link } = props;
  return (
    <a {...props} href={link} className="back-to-candidate">
      {text || 'Back'}
    </a>
  );
}
