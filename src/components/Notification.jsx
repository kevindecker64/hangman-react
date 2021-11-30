export default function Notification({ showNotification }) {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already guessed this letter</p>
    </div>
  );
}
