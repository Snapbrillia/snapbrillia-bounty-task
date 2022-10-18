import '../css/buttonStyles.css';

export default function Schedulebutton({ onClick }) {
  return (
    <button
      className="btn-secondary"
      onClick={onClick}
      style={{ textDecoration: 'none' }}
    >
      Schedule
    </button>
  );
}
