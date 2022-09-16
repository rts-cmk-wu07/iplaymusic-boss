import ProfileAvatar from "./ProfileAvatar";
import { useNavigate } from "react-router-dom";
const EventArticle = ({ image, tags, heading, likes }) => {
  const navigate = useNavigate();
  return (
    <article
      className="bg-additional text-white pb-6 rounded-lg"
      onClick={() => {
        navigate(`/event/${heading}`);
      }}
    >
      <img src={image} className="w-full rounded-t-lg" alt="alt" />
      <div className="py-4 px-6 flex flex-col gap-4">
        <ul className="flex">
          {tags?.map((tag, index) => (
            <li className="text-primary font-light" key={index}>
              {(index ? ", " : "") + tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center w-full justify-start gap-1 whitespace-nowrap text-ellipsis overflow-hidden">
          <div className="flex ml-3">
            <ProfileAvatar overlap="true" />
            <ProfileAvatar overlap="true" />
            <ProfileAvatar overlap="true" />
          </div>
          <p className="font-light text-sm">
            <strong className="font-bold">{likes.toLocaleString()}</strong> are talking about this
          </p>
        </div>
        <h2 className="text-2xl font-bold">{heading}</h2>
      </div>
    </article>
  );
};

export default EventArticle;
