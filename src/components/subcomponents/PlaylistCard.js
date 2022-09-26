// The playlist card
const PlaylistCard = (props) => {
  const { isImage, images, name, setIsImage } = props
  return (
    <>
      <div className="relative aspect-square">
        {!isImage && (
          <div className="bg-slate-500 w-full aspect-square z-30 opacity-50 absolute rounded-md" />
        )}
        <img
          className="mb-2 aspect-square object-cover fit-content -z-1 absolute rounded-md"
          style={{ opacity: isImage ? 1 : 0 }}
          src={images[1]?.url || images[0]?.url}
          onLoad={() => setIsImage(true)}
          alt=""
        />
      </div>
      <p className="text-center self-stretch mt-1 text-ellipsis overflow-hidden whitespace-nowrap text-additional dark:text-white ">
        {name}
      </p>
    </>
  )
}

export default PlaylistCard
