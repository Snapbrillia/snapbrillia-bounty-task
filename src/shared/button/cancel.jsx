import Cancel from '../../assets/icon/snapbrillia_red_cross_icon.svg';
import '../css/buttonStyles.css';

export default function UploadButton({ onClick }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.5rem',
        backgroundColor: '#00aeef',
        borderColor: 'orange',
      }}
      className="btn-secondary"
    >
      <img src={Cancel} alt="cancel-icon" />

      <span
        style={{
          paddingLeft: '2rem',
          fontWeight: '500',
          fontSize: '1.5rem',
          color: '#121212',
        }}
      >
        Cancel
      </span>
    </button>
  );
}
