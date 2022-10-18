import LiveChat from '../../assets/icon/snapbrillia_livechat_icon.svg';

export default function LiveChatButton() {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '.5rem',
      }}
      className="btn-primary"
      onClick={() => window.open('https://discord.gg/vJuPXu86vS', '_self')}
    >
      <img src={LiveChat} alt="live-chat-icon" />
      <span
        style={{
          paddingLeft: '2rem',
          fontWeight: '500',
          fontSize: '1.5rem',
        }}
      >
        Live Chat
      </span>
    </button>
  );
}
