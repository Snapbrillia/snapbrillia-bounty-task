import '../css/buttonStyles.css';

export default function DeleteButton({ text, handleClick, classAdd }) {
  return (
    <button
      className={`btn-delete ${classAdd}`}
      onClick={handleClick}
      type="button"
    >
      {text}
    </button>
  );
}
