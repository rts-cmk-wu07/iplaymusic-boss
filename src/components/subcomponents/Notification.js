const Notification = ({ text }) => {
  return (
    <div className="bg-primary px-12 py-4 text-white absolute">
      <p>{text}</p>
    </div>
  );
};

export default Notification;
