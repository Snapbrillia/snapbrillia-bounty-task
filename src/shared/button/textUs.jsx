import TextUs from '../../assets/icon/snapbrillia_text_us_icon.svg';

export default function TextUsButton({ onClick }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.5rem',
        color: '#BED3F3',
      }}
      className="btn-primary"
      onClick={onClick}
    >
      <img src={TextUs} alt="text-icon" />

      <span
        style={{
          paddingLeft: '2rem',
          fontWeight: '500',
          fontSize: '1.5rem',
        }}
      >
        Text Us
      </span>
    </button>
  );
}
