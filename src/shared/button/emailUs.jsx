import EmailUs from '../../assets/icon/snapbrillia_email_us_icon.svg';

import '../css/buttonStyles.css';

export default function EmailUsButton() {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '.5rem',
      }}
      className="btn-primary"
    >
      <img src={EmailUs} alt="email-icon" />
      <span
        style={{
          paddingLeft: '2rem',
          fontWeight: '500',
          fontSize: '1.5rem',
        }}
      >
        Email Us
      </span>
    </button>
  );
}
