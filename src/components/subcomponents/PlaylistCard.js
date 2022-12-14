// The playlist card
const PlaylistCard = (props) => {
  const { isImage, images, name, setIsImage } = props;
  return (
    <>
      <div className="relative aspect-square">
        {!isImage && (
          <div className="bg-slate-500 w-full aspect-square z-30 opacity-50 absolute rounded-md" />
        )}
        <img
          className="aspect-square object-cover w-full h-full -z-1 absolute rounded-md"
          style={{ opacity: isImage ? 1 : 0 }}
          src={images[1]?.url || images[0]?.url}
          onLoad={() => setIsImage(true)}
          alt="Playlist cover"
          draggable="false"
        />
      </div>
      <p className="text-center self-stretch mt-1 text-ellipsis overflow-hidden whitespace-nowrap text-additional dark:text-white">
        {name}
      </p>
    </>
  );
};

export default PlaylistCard;
