const ProfileAvatar = ({ overlap }) => {
  return <img src="https://picsum.photos/id/777/100" className={overlap ? "-ml-3 w-8 h-8 rounded-full" : "w-8 h-8 rounded-full"} alt="alt" />;
};

export default ProfileAvatar;
