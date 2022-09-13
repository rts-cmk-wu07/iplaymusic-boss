import SongListItem from "../components/subcomponents/SongListItem";
const List = () => {
  //Placheholder array of objects for the songs list items to be mapped over in the return statement below
  const songData = [
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
    { title: "Kill This Love", artist: "BLACKPINK", duration: "2:20" },
    { title: "Glimpse Of Us", artist: "Joji", duration: "3:20" },
  ];
  return (
    <ul className="flex flex-col gap-4  w-11/12 mx-auto">
      {songData.map((item, index) => (
        <SongListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List;
